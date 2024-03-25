import CreateBoardForm from './_components/create-board-form';

export default function CreateBoard() {
  return (
    <main className="flex container min-h-screen flex-col items-center p-8">
      <h1 className="text-3xl">Create a new board</h1>
      <div className="w-3/4">
        <CreateBoardForm />
      </div>
    </main>
  );
}
