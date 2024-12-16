export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  dueDate?: Date;
  description?: string;
  createdAt: Date;
}