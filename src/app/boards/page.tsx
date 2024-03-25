import { getBoards } from './actions';
import BoardView from './_components/BoardView';

export default async function BoardsPage() {
  const boards = await getBoards();

  return (
    <main className="flex container min-h-screen flex-col items-center p-8">
      <h1 className="text-3xl mb-4">Boards</h1>
      <div className="w-3/4">
        {boards.map((board) => (
          <BoardView key={board.id} board={board} />
        ))}
      </div>
    </main>
  );
}
