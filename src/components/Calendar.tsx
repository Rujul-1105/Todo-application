import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { useTodoStore } from '../store/todoStore';
import { TodoItem } from './TodoItem';

export function Calendar() {
  const { getTodosByDate, toggleTodo, removeTodo } = useTodoStore();
  const [selectedDate, setSelectedDate] = useState<Date>();

  const todosForSelectedDate = selectedDate 
    ? getTodosByDate(selectedDate)
    : [];

  const modifiers = {
    hasTodos: (date: Date) => getTodosByDate(date).length > 0,
  };

  const modifiersStyles = {
    hasTodos: {
      backgroundColor: '#1d4ed8',
      color: 'white',
    },
  };

  return (
    <div className="space-y-6">
      <div className="neumorphic p-6 rounded-xl">
        <DayPicker
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          modifiers={modifiers}
          modifiersStyles={modifiersStyles}
          showOutsideDays
          className="!font-sans text-gray-200"
        />
      </div>

      {selectedDate && (
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-200">
            Tasks for {selectedDate.toLocaleDateString()}
          </h2>
          {todosForSelectedDate.length === 0 ? (
            <p className="text-gray-400">No tasks for this day</p>
          ) : (
            todosForSelectedDate.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onRemove={removeTodo}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
}