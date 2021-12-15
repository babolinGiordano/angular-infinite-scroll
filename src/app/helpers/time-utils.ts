import StringUtils from './string-utils';
import {TranslateService} from '@ngx-translate/core';

export default class TimeUtils {
    public static padTimeInput(str: string): string {
        if (!str) {
            return '';
        }
        const time = str.split(':', 2).map(s => StringUtils.replace(s, /\D/g));

        if (!time || time.length === 0) {
            return '00:00';
        }

        const hours = time[0] ? Math.min(parseInt(time[0], 10), 23).toString() : '00';
        const minutes = time[1] ? Math.min(parseInt(time[1], 10), 59).toString() : '00';
        return `${StringUtils.padLeft(hours, 2, '0')}:${StringUtils.padRight(minutes, 2, '0')}`;
    }

    public static secondsToObject(totalSeconds: number): { day: number, hour: number, minute: number, second: number } {
        const day = Math.floor(totalSeconds / (3600 * 24));
        const hour = Math.floor(totalSeconds / 3600);
        const minute = Math.floor(totalSeconds % 3600 / 60);
        const second = Math.floor(totalSeconds % 3600 % 60);

        return {
            day, hour, minute, second
        };
    }

    public static formatDuration(second: number, translateService: TranslateService): string {
        const timeObject: { day: number, hour: number, minute: number, second: number } = TimeUtils.secondsToObject(second);
        const dayDisplay = timeObject.day > 0 ? `${timeObject.day}${translateService.instant('common.day')} ` : '';
        const hourDisplay = timeObject.hour > 0 ? `${timeObject.hour}${translateService.instant('common.hour')} ` : '';
        const minuteDisplay = timeObject.minute > 0 ? `${timeObject.minute}${translateService.instant('common.minute')} ` : '';
        const secondDisplay = (timeObject.second > 0 || second === 0)
            ? `${timeObject.second}${translateService.instant('common.second')}`
            : '';
        return `${dayDisplay}${hourDisplay}${minuteDisplay}${secondDisplay}`;
    }
}
