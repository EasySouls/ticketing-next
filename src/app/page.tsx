import { db } from '@/db';

export default async function Home() {
  const tickets = await db.query.tickets.findMany();

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      {tickets.map((ticket) => (
        <div key={ticket.id}>
          <h2>{ticket.title}</h2>
          <p>{ticket.description}</p>
          <p>{ticket.status}</p>
        </div>
      ))}
    </main>
  );
}

