import { getBoard } from '../actions';

interface BoardDetailsLayoutProps {
  children: React.ReactNode;
  params: { id: string };
}

export default async function BoardDetailsLayout({
  children,
  params,
}: BoardDetailsLayoutProps) {
  const board = await getBoard(params.id);

  if (!board) {
    return (
      <div className="flex">
        {/** Sidebar */}
        <aside className="w-1/5 dark:bg-slate-700 p-4">
          <h2 className="text-xl">Board not found</h2>
        </aside>

        {/** Main content */}
        <div className="flex-1 dark:bg-slate-600">{children}</div>
      </div>
    );
  }

  return (
    <div className="flex">
      {/** Sidebar */}
      <aside className="w-1/5 dark:bg-slate-700 p-4 border-r-2 shadow-lg">
        <h2 className="text-xl">{board.title}</h2>
      </aside>

      {/** Main content */}
      <div className="flex-1 dark:bg-slate-600">{children}</div>
    </div>
  );
}
