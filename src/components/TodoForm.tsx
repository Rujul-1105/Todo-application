import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { Calendar } from 'lucide-react';
import { useTodoStore } from '../store/todoStore';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { TextArea } from './ui/TextArea';
import 'react-day-picker/dist/style.css';

export function TodoForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    addTodo({
      title: title.trim(),
      description: description.trim(),
      completed: false,
      dueDate: selectedDate,
    });

    setTitle('');
    setDescription('');
    setSelectedDate(undefined);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
      <div className="neumorphic-inset p-4 rounded-xl">
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="What needs to be done?"
        />
        <TextArea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Add a description (optional)"
          className="mt-2"
        />
        <div className="flex items-center justify-between mt-4">
          <div className="relative">
            <Button
              type="button"
              onClick={() => setShowCalendar(!showCalendar)}
              className="flex items-center gap-2"
            >
              <Calendar size={18} />
              {selectedDate ? selectedDate.toLocaleDateString() : 'Set due date'}
            </Button>
            {showCalendar && (
              <div className="absolute top-full left-0 mt-2 z-10 neumorphic p-4 rounded-xl">
                <DayPicker
                  mode="single"
                  selected={selectedDate}
                  onSelect={(date) => {
                    setSelectedDate(date);
                    setShowCalendar(false);
                  }}
                  className="text-gray-200"
                />
              </div>
            )}
          </div>
          <Button
            type="submit"
            className="px-6 py-2 text-blue-400 font-medium"
          >
            Add
          </Button>
        </div>
      </div>
    </form>
  );
}