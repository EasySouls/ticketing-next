'use server';

import { db } from '@/db';
import { Board } from '@/db/schema';

export async function getBoards(): Promise<Board[]> {
  try {
    const boards = await db.query.boards.findMany();
    return boards;
  } catch (error) {
    console.error(error);
    return [];
  }
}
