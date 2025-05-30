import '../styles/globals.css';
import Header from '@/components/Header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Creatina App',
  description: 'Aplicativo para lembrar de tomar creatina',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-50">
        <Header />
        {children}
      </body>
    </html>
  );
}
