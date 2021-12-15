import {Sort} from '@angular/material/sort';

export default class SortUtils {

    public static compare(a: string, b: string): number {
        try {
            return (a.localeCompare(b, undefined, {numeric: true, sensitivity: 'accent'}));
        } catch (error) {
            return (a.localeCompare(b));
        }
    }

    public static sort<T>(data: T[], keyFn: string, isAsc = true): T[] {
        return data.sort((a, b) => {
            const sortA = a[keyFn] ? a[keyFn].toString().toLowerCase().trim() : '';
            const sortB = b[keyFn] ? b[keyFn].toString().toLowerCase().trim() : '';
            return this.compare(sortA, sortB) * (isAsc ? 1 : -1);
        });
    }

    public static sortTable<T>(sort: Sort, data: T[]): T[] {
        return this.sort<T>(data, sort.active, sort.direction === 'asc');
    }
}
