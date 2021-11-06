import dayjs from 'dayjs';

/**
 * Converts date to hour-minute format.
 * @param date The date to get the hour minute from.
 * @returns The formatted date.
 */
export function toHourMinute(date: Date): string {
  return dayjs(date).utc().format('h:mm A');
}
