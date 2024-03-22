import { pgEnum, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const ticketPhase = pgEnum('ticket_phase', [
  'created',
  'in_progress',
  'under_review',
  'closed',
]);

export const ticket = pgTable('tickets', {
  id: serial('id').notNull().primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  status: ticketPhase('ticket_phase').notNull().default('created'),
  created_at: timestamp('created_at', { mode: 'date' }).defaultNow(),
  updated_at: timestamp('updated_at', { mode: 'date' }).defaultNow(),
});
