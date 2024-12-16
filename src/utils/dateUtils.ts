import { startOfDay, isToday, isSameDay } from 'date-fns';

export const isSameDayOrUndefined = (date1?: Date, date2?: Date): boolean => {
  if (!date1 || !date2) return false;
  return isSameDay(date1, date2);
};

export const normalizeDate = (date?: Date): Date | undefined => {
  return date ? startOfDay(date) : undefined;
};