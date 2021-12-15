import {Configs} from '../config.constant';

export default class ColorUtils {
    public static generateColor(str: string): string {

        if (!str) {
            return '';
        }

        let sum = 0;
        for (let i = 0; i < str.length; i++) {
            sum += str.charCodeAt(i);
        }
        return Configs.AVATAR_COLORS[sum % Configs.AVATAR_COLORS.length];
    }

    public static getTimingAverageColor(value: number): string {
        if (value < Configs.MIN_REPORT_TASK_TIMING_AVERAGE || value > Configs.MAX_REPORT_TASK_TIMING_AVERAGE) {
            return Configs.REPORT_CARD_COLORS.ALERT;
        }
        return Configs.REPORT_CARD_COLORS.NORMAL;
    }
}
