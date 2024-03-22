'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import { ModeToggle } from './ModeToggle';
import { Button } from './ui/button';

export default function Header() {
  const session = useSession();

  return (
    <header className="flex items-center justify-between w-full p-4 text-foreground">
      <h1 className="text-2xl font-semibold">Ticketing</h1>
      <div className="flex items-center gap-4">
        <ModeToggle />
        {session.data?.user?.name}
        {session.data ? (
          <Button onClick={() => signOut()}>Sign Out</Button>
        ) : (
          <Button onClick={() => signIn()}>Sign In</Button>
        )}
      </div>
    </header>
  );
}
