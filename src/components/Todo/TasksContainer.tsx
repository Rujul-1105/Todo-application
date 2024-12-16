import React from 'react';
import { TodayTasks } from './TodayTasks';
import { ScheduledTasks } from './ScheduledTasks';

export function TasksContainer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <TodayTasks />
      <ScheduledTasks />
    </div>
  );
}