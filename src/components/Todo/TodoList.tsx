import React from 'react';
import { Todo } from '../../types/todo';
import { TodoItem } from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
  emptyMessage?: string;
}

export function TodoList({ 
  todos, 
  onToggle, 
  onRemove, 
  emptyMessage = 'No tasks available'
}: TodoListProps) {
  if (todos.length === 0) {
    return (
      <div className="text-center text-[var(--text-secondary)] py-8">
        {emptyMessage}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}