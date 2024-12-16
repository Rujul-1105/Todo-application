import React from 'react';
import { DayPicker } from 'react-day-picker';
import { useTodoStore } from '../../store/todoStore';
import { useThemeStore } from '../../store/themeStore';

interface CalendarViewProps {
  selectedDate?: Date;
  onSelectDate: (date?: Date) => void;
}

export function CalendarView({ selectedDate, onSelectDate }: CalendarViewProps) {
  const { getTodosByDate } = useTodoStore();
  const { theme } = useThemeStore();

  const modifiers = {
    hasTodos: (date: Date) => getTodosByDate(date).length > 0,
  };

  const modifiersStyles = {
    hasTodos: {
      backgroundColor: theme === 'light' ? '#2563eb' : '#1d4ed8',
      color: 'white',
    },
  };

  return (
    <div className="neumorphic p-6 rounded-xl">
      <DayPicker
        mode="single"
        selected={selectedDate}
        onSelect={onSelectDate}
        modifiers={modifiers}
        modifiersStyles={modifiersStyles}
        showOutsideDays
        className="!font-sans text-[var(--text-primary)]"
      />
    </div>
  );
}