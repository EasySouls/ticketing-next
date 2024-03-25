'use client';

import { ModeToggle } from './ModeToggle';
import AccountDropdown from './AccountDropdown';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center dark:bg-slate-800 justify-between w-full p-4 text-foreground">
      <h1 className="text-2xl font-semibold">Ticketing</h1>
      <div className="flex items-center gap-4">
        <nav>
          <Link href="/boards">Boards</Link>
        </nav>
        <ModeToggle />
        <AccountDropdown />
      </div>
    </header>
  );
}
