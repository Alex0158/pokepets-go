const paths:Record<string,string>={
  explore:'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM16 8l-3 6-5 2 2-5Z',
  activity:'M9 5a3 3 0 0 1 6 0v6a3 3 0 0 1-6 0ZM6 10v1a6 6 0 0 0 12 0v-1M12 17v5m-4 0h8',
  daily:'M12 21 4 13C-2 6 7 0 12 6c5-6 14 0 8 7Z',
  pet:'M7 16c0-3 3-6 5-6s5 3 5 6c0 4-3 2-5 2s-5 2-5-2ZM5 7c-3 0-3 6 0 6s3-6 0-6ZM10 2c-3 0-3 6 0 6s3-6 0-6ZM16 3c-3 0-3 6 0 6s3-6 0-6ZM20 9c-3 0-3 6 0 6s3-6 0-6Z',
  memories:'M12 6C8 3 5 3 2 4v15c4-1 7-1 10 2 3-3 6-3 10-2V4c-3-1-7-1-10 2Zm0 0v15',
  avatar:'M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM4 22v-3a8 8 0 0 1 16 0v3',
  community:'M12 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM2 21v-3a7 7 0 0 1 14 0v3M17 4a3 3 0 0 1 0 6m2 4a6 6 0 0 1 3 5v2',
  battle:'m3 3 4 1 12 13-3 3L4 7Zm18 0-4 1-4 5m-4 4-5 4 3 3m7-1 6-6M4 13l6 6m6 1 3 3M7 20l-3 3',
  arrow:'M4 12h15m-6-6 6 6-6 6',
  refresh:'M20 7v5h-5M4 17v-5h5m-4-4a7 7 0 0 1 12-3l3 3M4 16l3 3a7 7 0 0 0 12-3',
};
export function GameIcon({name}:{name:string}){
  return <svg className="game-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[name]??paths.explore}/></svg>;
}
