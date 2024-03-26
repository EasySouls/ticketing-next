import { getBoards } from './actions';
import BoardCard from './_components/BoardCard';

export default async function BoardsPage() {
  const boards = await getBoards();

  return (
    <main className="flex container min-h-screen flex-col items-center p-8">
      <h1 className="text-3xl mb-8">Boards</h1>
      <div className="w-3/4 flex flex-col gap-4 lg:grid lg:grid-cols-2">
        {boards.map((board) => (
          <BoardCard key={board.id} board={board} />
        ))}
      </div>
    </main>
  );
}
