'use server';

import { db } from '@/db';
import { boards, CreateBoard } from '@/db/schema';
import { auth } from '@/lib/auth';

export async function createBoardAction(board: Omit<CreateBoard, 'user_id'>) {
  const session = await auth();
  if (!session?.user) {
    throw new Error('Unauthorized');
  }

  try {
    await db.insert(boards).values({ ...board, user_id: session.user.id! });
  } catch (error) {
    console.error(error);
  }
}
