import {isNil} from 'lodash-es';

export default class StringUtils {
    /**
     * Gets the substring after the last occurrence of a separator.
     * The separator is not returned.
     *
     * @param str the String to get a substring from
     * @param separator the String to search for
     * @return the substring after the last occurrence of the separator, if null String input
     */
    public static substringAfterLast(str: string, separator: string): string {
        if (!str) {
            return str;
        }

        if (!separator) {
            return '';
        }

        const pos = str.lastIndexOf(separator);
        if (pos || pos === str.length - separator.length) {
            return '';
        }
        return str.substring(pos + separator.length);
    }

    /**
     * Capitalize the first letter of a string
     * @param str A string
     */
    public static capitalizeFirstLetter(str: string): string {
        return str ? str.charAt(0).toUpperCase() + str.slice(1) : '';
    }

    /**
     * Null/Undefined safe toLowerCase a string
     * @param str A string
     */
    public static toLowerCase(str: string): string {
        return str ? str.toLowerCase() : str;
    }

    /**
     * Check if a string contains another string, case insensitive
     * @param str A string
     * @param searchStr A substring to search
     */
    public static containsIgnoreCase(str: string, searchStr: string): boolean {
        if (!str || !searchStr) {
            return false;
        }

        return str.toLowerCase().includes(searchStr.toLowerCase());
    }

    /**
     * Null/Undefined safe substring a string
     * @param str A string
     * @param end Zero-based index number indicating the end of the substring
     */
    public static substring(str: string, end = 0) {
        return str ? str.substring(0, end) : str;
    }

    /**
     * Null/Undefined safe padEnd a string
     * @param str A string
     *
     * @param maxLength The length of the resulting string once the current string has been padded.
     *        If this parameter is smaller than the current string's length, the current string will be returned as it is.
     *
     * @param fillString The string to pad the current string with.
     *        If this string is too long, it will be truncated and the left-most part will be applied.
     *        The default value for this parameter is " " (U+0020).
     */
    public static padRight(str: string, maxLength: number, fillString: string) {
        return str ? str.padEnd(maxLength, fillString) : str;
    }

    public static padLeft(str: string, maxLength: number, fillString: string) {
        return str ? str.padStart(maxLength, fillString) : str;
    }

    public static replace(str: string, searchValue: string | RegExp, replace = '') {
        return str ? str.replace(searchValue, replace) : str;
    }

    public static truncate(str: string, length: number): string {
        return str.length < length ? str : `${str.slice(0, length)}...`;
    }

    public static truncateArray(arr: string[], length: number): string {
        return arr?.length <= length ? arr?.join(', ') : `${arr?.slice(0, length).join(', ')},...`;
    }

    public static getFirstCharactersFromString(str: string, length: number): string {
        const strArr = str.split(' ').slice(0, length);
        let newStr = '';
        if (strArr.length) {
            for (const s of strArr) {
                newStr = newStr.concat(s.charAt(0));
            }
        }
        return newStr;
    }

    public static replaceStringFromRegex(str: string, regex: RegExp, replaceValue: string): string {
        return str && regex ? str.replace(regex, replaceValue) : '';
    }

    /**
     * Method for check is string is a null or undefined
     *
     * @param firstName firstName
     * @param lastName lastName
     * @returns String combination with 2 input string
     */
    public static checkGuestFullName(firstName: string, lastName: string): string {
        const processedFirstName = !isNil(firstName) ? firstName : '';
        const processedLastName = !isNil(lastName) ? lastName : '';
        let space = '';

        if (processedFirstName.length > 0 && processedLastName.length > 0) {
            space = ' ';
        }

        return `${processedFirstName}${space}${processedLastName}`;
    }
}
