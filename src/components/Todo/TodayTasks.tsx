import React from 'react';
import { TodoList } from './TodoList';
import { useTodoStore } from '../../store/todoStore';
import { useTodoFilters } from '../../hooks/useTodoFilters';

export function TodayTasks() {
  const { todos, toggleTodo, removeTodo } = useTodoStore();
  const { todayTodos } = useTodoFilters(todos);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-[var(--text-primary)]">Today's Tasks</h2>
      <TodoList
        todos={todayTodos}
        onToggle={toggleTodo}
        onRemove={removeTodo}
        emptyMessage="No tasks for today! 🎉"
      />
    </div>
  );
}