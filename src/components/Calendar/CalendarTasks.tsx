import React from 'react';
import { format } from 'date-fns';
import { TodoList } from '../Todo/TodoList';
import { useTodoStore } from '../../store/todoStore';

interface CalendarTasksProps {
  selectedDate?: Date;
}

export function CalendarTasks({ selectedDate }: CalendarTasksProps) {
  const { getTodosByDate, toggleTodo, removeTodo } = useTodoStore();
  const todosForSelectedDate = selectedDate ? getTodosByDate(selectedDate) : [];

  if (!selectedDate) {
    return null;
  }

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-[var(--text-primary)]">
        Tasks for {format(selectedDate, 'PPPP')}
      </h2>
      {todosForSelectedDate.length === 0 ? (
        <p className="text-[var(--text-secondary)]">No tasks scheduled for this day</p>
      ) : (
        <TodoList 
          todos={todosForSelectedDate}
          onToggle={toggleTodo}
          onRemove={removeTodo}
        />
      )}
    </div>
  );
}