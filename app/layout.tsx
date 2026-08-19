import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: '? Table! ??French Etiquette', description: 'Learn French dining etiquette by playing.' };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="ko"><body>{children}</body></html>; }

