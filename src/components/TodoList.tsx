import React from 'react';
import { useTodoStore } from '../store/todoStore';
import { useTodoFilters } from '../hooks/useTodoFilters';
import { TodoItem } from './TodoItem';

export function TodoList() {
  const { todos, toggleTodo, removeTodo } = useTodoStore();
  const { todayTodos } = useTodoFilters(todos);

  if (todayTodos.length === 0) {
    return (
      <div className="text-center text-gray-400 py-8">
        No tasks for today! 🎉
      </div>
    );
  }

  return (
    <div className="w-full max-w-md space-y-4">
      {todayTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={toggleTodo}
          onRemove={removeTodo}
        />
      ))}
    </div>
  );
}