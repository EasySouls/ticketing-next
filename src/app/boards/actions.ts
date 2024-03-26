'use server';

import { db } from '@/db';
import { Board, boards } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function getBoards(): Promise<Board[]> {
  try {
    const boards = await db.query.boards.findMany();
    return boards;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getBoard(id: string): Promise<Board | null> {
  try {
    const boardId = parseInt(id);
    const board = await db.query.boards.findFirst({
      where: eq(boards.id, boardId),
    });

    if (!board) {
      return null;
    }

    return board;
  } catch (error) {
    console.error(error);
    return null;
  }
}
