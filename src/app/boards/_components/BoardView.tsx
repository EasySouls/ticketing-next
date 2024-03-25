import { Board } from '@/db/schema';

export default function BoardView({ board }: { board: Board }) {
  return (
    <div className="border p-4 rounded-lg mb-4 shadow-md dark:bg-slate-700">
      <h2 className="text-xl mb-1">{board.title}</h2>
      <p>{board.description}</p>
      {board.githubRepo && (
        <a
          href={board.githubRepo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 mt-1"
        >
          {board.githubRepo}
        </a>
      )}
    </div>
  );
}
