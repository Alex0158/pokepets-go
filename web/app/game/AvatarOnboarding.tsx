'use client';

import { AvatarSetup } from '../../src/features/avatar/AvatarSetup';
import type { AvatarAssets } from '../../src/client/avatar-client.ts';

export function AvatarOnboarding({ownerName,onContinue,onAssets}:{ownerName:string;onContinue:()=>void;onAssets:(assets:AvatarAssets)=>void}){
  return <AvatarSetup ownerName={ownerName} onAssets={onAssets} onContinue={onContinue}/>;
}
