import React, { useState } from 'react';
import { CalendarView } from './CalendarView';
import { CalendarTasks } from './CalendarTasks';

export function Calendar() {
  const [selectedDate, setSelectedDate] = useState<Date>();

  return (
    <div className="space-y-6">
      <CalendarView 
        selectedDate={selectedDate}
        onSelectDate={setSelectedDate}
      />
      <CalendarTasks selectedDate={selectedDate} />
    </div>
  );
}