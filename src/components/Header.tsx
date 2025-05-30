'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const linkStyle = (path: string) =>
    `px-4 py-2 rounded-md font-medium transition ${
      pathname === path
        ? 'bg-blue-600 text-white'
        : 'text-gray-700 hover:bg-gray-200'
    }`;

  return (
    <header className="bg-white shadow-md py-3 px-6 flex justify-center gap-4">
      <Link href="/dashboard" className={linkStyle('/dashboard')}>
        Dashboard
      </Link>
      <Link href="/settings" className={linkStyle('/settings')}>
        Configurações
      </Link>
    </header>
  );
}
