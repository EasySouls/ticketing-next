import { getBoard } from '../actions';

export default async function BoardPage({
  params,
}: {
  params: { id: string };
}) {
  const board = await getBoard(params.id);

  if (!board) {
    // TODO - 404 page
    return <div>Board not found</div>;
  }

  return (
    <div className="p-4">
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
