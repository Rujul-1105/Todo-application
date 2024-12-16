import { create } from 'zustand';
import { Todo } from '../types/todo';
import { isSameDayOrUndefined, normalizeDate } from '../utils/dateUtils';

interface TodoStore {
  todos: Todo[];
  addTodo: (todo: Omit<Todo, 'id' | 'createdAt'>) => void;
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
  getTodosByDate: (date: Date) => Todo[];
}

export const useTodoStore = create<TodoStore>((set, get) => ({
  todos: [],
  addTodo: (todo) => {
    set((state) => ({
      todos: [
        ...state.todos,
        {
          ...todo,
          id: crypto.randomUUID(),
          createdAt: new Date(),
          dueDate: normalizeDate(todo.dueDate),
        },
      ],
    }));
  },
  toggleTodo: (id) => {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  },
  removeTodo: (id) => {
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  },
  getTodosByDate: (date) => {
    return get().todos.filter((todo) =>
      isSameDayOrUndefined(todo.dueDate, date)
    );
  },
}));