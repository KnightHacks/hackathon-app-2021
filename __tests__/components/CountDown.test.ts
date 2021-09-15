import { diffHourMinSec } from '../../src/components/CountDown';
import dayjs from 'dayjs';

const start = dayjs(new Date(2021, 11, 10, 16, 30, 0));

describe('Countdown Time Function', () => {
    test('calculates same dates', () => {
        expect(diffHourMinSec(dayjs(new Date(2021, 11, 10, 16, 30, 0)), start)).toBe('00:00:00');
    });
    test('calculates dates (simple years)', () => { // 1 year
        expect(diffHourMinSec(dayjs(new Date(2020, 11, 10, 16, 30, 0)), start)).toBe('8760:00:00');
    });
    test('calculates dates (simple months)', () => { // 1 month
        expect(diffHourMinSec(dayjs(new Date(2021, 10, 10, 16, 30, 0)), start)).toBe('720:00:00');
    });
    test('caulcates dates (simple days)', () => { // 2 days
        expect(diffHourMinSec(dayjs(new Date(2021, 11, 8, 16, 30, 0)), start)).toBe('48:00:00');
    });
    test('caulcates dates (simple days)', () => { // 1 day
        expect(diffHourMinSec(dayjs(new Date(2021, 11, 9, 16, 30, 0)), start)).toBe('24:00:00');
    });
    test('caulcates dates (simple days)', () => { // 1 day 12 hours
        expect(diffHourMinSec(dayjs(new Date(2021, 11, 9, 4, 30, 0)), start)).toBe('36:00:00');
    });
    test('calculates dates (hours)', () => { // 23 hours
        expect(diffHourMinSec(dayjs(new Date(2021, 11, 9, 17, 30, 0)), start)).toBe('23:00:00');
    });
    test('calculates dates (hours)', () => { // 23 hours 30 minutes
        expect(diffHourMinSec(dayjs(new Date(2021, 11, 9, 17, 0, 0)), start)).toBe('23:30:00');
    });
    test('calculates dates (hours)', () => { // 12 hours
        expect(diffHourMinSec(dayjs(new Date(2021, 11, 10, 4, 30, 0)), start)).toBe('12:00:00');
    });
    test('calculates dates (hours)', () => { // 12 hours 30 minutes
        expect(diffHourMinSec(dayjs(new Date(2021, 11, 10, 4, 0, 0)), start)).toBe('12:30:00');
    });
    test('calculates dates (simple hours)', () => { // 1 hour
        expect(diffHourMinSec(dayjs(new Date(2021, 11, 10, 15, 30, 0)), start)).toBe('01:00:00');
    });
    test('calculates dates (hours)', () => { // 1 hour 30 minutes
        expect(diffHourMinSec(dayjs(new Date(2021, 11, 10, 15, 0, 0)), start)).toBe('01:30:00');
    });
    test('calculates dates (hours)', () => { // 50 minutes
        expect(diffHourMinSec(dayjs(new Date(2021, 11, 10, 15, 40, 0)), start)).toBe('00:50:00');
    });
    test('calculates dates (hours)', () => { // 1 minute
        expect(diffHourMinSec(dayjs(new Date(2021, 11, 10, 16, 29, 0)), start)).toBe('00:01:00');
    });
    test('calculates dates (hours)', () => { // 1 minute 30 seconds
        expect(diffHourMinSec(dayjs(new Date(2021, 11, 10, 16, 28, 30)), start)).toBe('00:01:30');
    });
    test('calculates dates (hours)', () => { // 50 seconds
        expect(diffHourMinSec(dayjs(new Date(2021, 11, 10, 16, 29, 10)), start)).toBe('00:00:50');
    });
    test('calculates dates (hours)', () => { // 1 second
        expect(diffHourMinSec(dayjs(new Date(2021, 11, 10, 16, 29, 59)), start)).toBe('00:00:01');
    });
});