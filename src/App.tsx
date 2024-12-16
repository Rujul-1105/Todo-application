import React from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';
import { TodoForm } from './components/Todo/TodoForm';
import { TasksContainer } from './components/Todo/TasksContainer';
import { Calendar } from './components/Calendar';
import { Clock } from './components/DateTime/Clock';
import { ThemeToggle } from './components/Theme/ThemeToggle';
import { useThemeStore } from './store/themeStore';
import './styles/theme.css';

export default function App() {
  const { theme } = useThemeStore();

  return (
    <div className={`theme-${theme} min-h-screen bg-[var(--bg-primary)] p-8 text-[var(--text-primary)]`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <div className="neumorphic p-3 rounded-xl text-[var(--accent)]">
              <CalendarIcon size={24} />
            </div>
            <h1 className="text-3xl font-bold">Your Todo List</h1>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Clock />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <TodoForm />
            <TasksContainer />
          </div>
          <div>
            <Calendar />
          </div>
        </div>
      </div>
    </div>
  );
}