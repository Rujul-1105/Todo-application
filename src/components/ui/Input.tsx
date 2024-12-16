import React from 'react';
import { cn } from '../../utils/classNames';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        'w-full bg-transparent outline-none text-[var(--text-primary)] placeholder-[var(--text-secondary)]',
        className
      )}
      {...props}
    />
  );
}