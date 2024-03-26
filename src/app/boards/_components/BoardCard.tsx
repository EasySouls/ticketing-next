import { Board } from '@/db/schema';
import Link from 'next/link';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GithubIcon } from 'lucide-react';

export default function BoardCard({ board }: { board: Board }) {
  return (
    <Card className="dark:bg-slate-700 shadow-md">
      <CardHeader>
        <CardTitle>{board.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{board.description}</p>
      </CardContent>
      <CardFooter className="flex items-center gap-4 mt-1">
        <Button asChild>
          <Link href={`/boards/${board.id}`}>View Board</Link>
        </Button>

        {board.githubRepo && (
          <Button asChild variant="outline">
            <Link
              href={board.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 flex items-center gap-2"
            >
              <GithubIcon /> Github Repo
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
