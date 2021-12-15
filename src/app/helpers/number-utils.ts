export default class NumberUtils {

    public static formatNumberAsPercentage(value: number): string {
        return (value !== undefined ? value > 0 ? `+${value}%` : `${value}%` : '-');
    }
}
