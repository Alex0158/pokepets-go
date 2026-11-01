'use client';

import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';

export function MissionDialog({children,onClose}:{children:ReactNode;onClose:()=>void}){
  const dialog=useRef<HTMLDialogElement>(null);
  useEffect(()=>{const element=dialog.current;if(element&&!element.open)element.showModal();return()=>element?.close();},[]);
  return <dialog ref={dialog} className="native-mission-dialog" aria-labelledby="mission-title" onCancel={onClose} onClose={onClose}>{children}</dialog>;
}
