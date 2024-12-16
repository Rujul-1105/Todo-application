import React from 'react';
import { Check, Trash2 } from 'lucide-react';
import { Todo } from '../types/todo';
import { format } from 'date-fns';
import { Button } from './ui/Button';
import { cn } from '../utils/classNames';

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
        >
          <Check size={18} />
        </Button>
        <div className="flex-1">
          <h3
            className={cn(
              'font-medium',
              todo.completed ? 'line-through text-gray-500' : 'text-gray-200'
            )}
          >
            {todo.title}
          </h3>
          {todo.description && (
            <p className="text-sm text-gray-400 mt-1">{todo.description}</p>
          )}
          {todo.dueDate && (
            <p className="text-sm text-blue-400 mt-2">
              Due: {format(todo.dueDate, 'PPP')}
            </p>
          )}
        </div>
        <Button
          onClick={() => onRemove(todo.id)}
          variant="danger"
        >
          <Trash2 size={18} />
        </Button>
      </div>
    </div>
  );
}