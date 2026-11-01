import type {Participant} from '../../shared/multiplayer.ts';
export type Move='attack'|'small_attack'|'big_attack'|'defend'|'heal'|'flee';
type Combatant={hp:number;maxHp:number;attack:number;defence:number;guarding:boolean;bigAttacksUsed?:number;healsUsed?:number};
export type CombatState={self:Combatant;opponent:Combatant};
export type DecisionProvider=(state:CombatState)=>Promise<Move>;
type LegalState={hp:number;bigAttacksUsed?:number;healsUsed?:number}&({maxHp:number}|{stats:Participant['stats']});
export function legalAutoMoves(self:LegalState):Move[]{
 const maxHp='maxHp' in self?self.maxHp:self.stats.health;
 const moves:Move[]=['small_attack'];
 if((self.bigAttacksUsed??0)<3)moves.push('big_attack');
 if((self.healsUsed??0)<1&&self.hp<maxHp)moves.push('heal');
 moves.push('defend','flee');return moves;
}
const description:Record<Move,string>={attack:'Legacy basic attack.',small_attack:'Basic attack with unlimited uses.',big_attack:'A stronger attack, at most three uses per match.',heal:'Restore 10 HP up to maximum, once per match.',defend:'Halve the next incoming attack.',flee:'End the battle with no winner or reward.'};
export function createDecisionProvider(apiKey:string,send:typeof fetch=fetch):DecisionProvider {
 return async(state)=>{
  const allowed=legalAutoMoves(state.self);
  const res=await send('https://api.openai.com/v1/decisions',{method:'POST',headers:{Authorization:`Bearer ${apiKey}`,'Content-Type':'application/json'},body:JSON.stringify({model:'gpt-6-luna',input:[{role:'user',content:[{type:'input_json',data:{...state,legalMoves:allowed}}]}],questions:[{type:'choice',name:'battle_move',instructions:'Choose the best available next move for the player in a friendly turn-based game. Defend halves the next incoming attack. Flee immediately ends the match without a winner: choose it only when strategically appropriate. Choose one available action.',choices:allowed.map(value=>({value,description:description[value]}))}]}),signal:AbortSignal.timeout(3500)});
  if(!res.ok)throw Error('decision_unavailable');
  const data=await res.json();const answer=Array.isArray(data.answers)?data.answers.find((a:{name?:string})=>a.name==='battle_move'):null;
  if(answer?.type!=='choice'||!allowed.includes(answer.choice))throw Error('invalid_decision');
  return answer.choice;
 };
}
export async function chooseAutoMove(state:CombatState,provider?:DecisionProvider):Promise<{move:Move;source:'decisions'|'fallback'}>{
 if(provider){try{const move=await provider(state);if(legalAutoMoves(state.self).includes(move))return {move,source:'decisions'};}catch{}}
 return {move:'small_attack',source:'fallback'};
}
