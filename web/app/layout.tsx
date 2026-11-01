import type { ReactNode } from 'react';
import './style.css';

export const metadata = { title: 'Pokepet Go', description: 'A shared adventure for pets and their people.' };

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
