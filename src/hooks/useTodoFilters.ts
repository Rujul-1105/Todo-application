import { useMemo } from 'react';
import { isToday, isFuture, startOfDay } from 'date-fns';
import { Todo } from '../types/todo';

export const useTodoFilters = (todos: Todo[]) => {
  const todayTodos = useMemo(() => {
    const today = startOfDay(new Date());
    return todos.filter(
      (todo) =>
        // Show todos created today (without due date)
        (isToday(new Date(todo.createdAt)) && !todo.dueDate) ||
        // Show todos due today
        (todo.dueDate && isToday(new Date(todo.dueDate)))
    );
  }, [todos]);

  const scheduledTodos = useMemo(() => {
    return todos.filter(
      (todo) =>
        todo.dueDate && 
        isFuture(new Date(todo.dueDate)) && 
        !isToday(new Date(todo.dueDate))
    ).sort((a, b) => 
      new Date(a.dueDate!).getTime() - new Date(b.dueDate!).getTime()
    );
  }, [todos]);

  return { todayTodos, scheduledTodos };
};