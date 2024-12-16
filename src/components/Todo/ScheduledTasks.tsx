import React from 'react';
import { TodoList } from './TodoList';
import { useTodoStore } from '../../store/todoStore';
import { useTodoFilters } from '../../hooks/useTodoFilters';

export function ScheduledTasks() {
  const { todos, toggleTodo, removeTodo } = useTodoStore();
  const { scheduledTodos } = useTodoFilters(todos);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-[var(--text-primary)]">Scheduled Tasks</h2>
      <TodoList
        todos={scheduledTodos}
        onToggle={toggleTodo}
        onRemove={removeTodo}
        emptyMessage="No scheduled tasks"
      />
    </div>
  );
}