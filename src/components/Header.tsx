import { ModeToggle } from './ModeToggle';

export default function Header() {
  return (
    <header className='flex items-center justify-between w-full p-4'>
      <h1 className='text-2xl font-semibold'>Ticketing</h1>
      <ModeToggle />
    </header>
  );
}
