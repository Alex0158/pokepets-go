export type GameIntent={intent:'points_help'|'open_view'|'upgrade'|'select_player'|'challenge'|'activity_report'|'unknown';stat:'attack'|'health'|'defence'|'speed'|null;targetName:string|null;battleMode:'sneak'|'face'|null;view:'map'|'pet'|'battle'|'activity'|'community'|null};
export function parseIntent(text:string):GameIntent {
  let x:unknown;try{x=JSON.parse(text);}catch{throw Error('invalid_intent');}
  if(!x||typeof x!=='object'||Array.isArray(x))throw Error('invalid_intent');
  const o=x as Record<string,unknown>;
  if(Object.keys(o).sort().join(',')!=='battleMode,intent,stat,targetName,view'||!['points_help','open_view','upgrade','select_player','challenge','activity_report','unknown'].includes(String(o.intent))||!(o.stat===null||['attack','health','defence','speed'].includes(String(o.stat)))||!(o.battleMode===null||['sneak','face'].includes(String(o.battleMode)))||!(o.view===null||['map','pet','battle','activity','community'].includes(String(o.view)))||!(o.targetName===null||(typeof o.targetName==='string'&&o.targetName.trim().length>0&&o.targetName.trim().length<=80)))throw Error('invalid_intent');
  return {intent:o.intent as GameIntent['intent'],stat:o.stat as GameIntent['stat'],targetName:typeof o.targetName==='string'?o.targetName.trim():null,battleMode:o.battleMode as GameIntent['battleMode'],view:o.view as GameIntent['view']};
}
