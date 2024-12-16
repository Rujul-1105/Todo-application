import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';

export function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-right">
      <div className="text-2xl font-bold text-[var(--text-primary)]">
        {format(time, 'HH:mm:ss')}
      </div>
      <div className="text-sm text-[var(--text-secondary)]">
        {format(time, 'EEEE, MMMM d, yyyy')}
      </div>
    </div>
  );
}