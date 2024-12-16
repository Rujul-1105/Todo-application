import React from 'react';
import { Check, Trash2 } from 'lucide-react';
import { Todo } from '../../types/todo';
import { format } from 'date-fns';
import { Button } from '../ui/Button';
import { cn } from '../../utils/classNames';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
}

export function TodoItem({ todo, onToggle, onRemove }: TodoItemProps) {
  return (
    <div
      className={cn(
        'neumorphic p-4 rounded-xl transition-all',
        todo.completed && 'opacity-75'
      )}
    >
      <div className="flex items-start gap-4">
        <Button
          onClick={() => onToggle(todo.id)}
          variant={todo.completed ? 'success' : 'default'}
          className="shrink-0"
        >
          <Check size={18} />
        </Button>
        <div className="flex-1 min-w-0">
          <h3
            className={cn(
              'font-medium truncate',
              todo.completed ? 'line-through text-[var(--text-secondary)]' : 'text-[var(--text-primary)]'
            )}
          >
            {todo.title}
          </h3>
          {todo.description && (
            <p className="text-sm text-[var(--text-secondary)] mt-1 line-clamp-2">
              {todo.description}
            </p>
          )}
          {todo.dueDate && (
            <p className="text-sm text-[var(--accent)] mt-2">
              Due: {format(todo.dueDate, 'PPP')}
            </p>
          )}
        </div>
        <Button
          onClick={() => onRemove(todo.id)}
          variant="danger"
          className="shrink-0"
        >
          <Trash2 size={18} />
        </Button>
      </div>
    </div>
  );
}