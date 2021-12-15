import {format} from 'date-fns';
import {DateFormat} from '../enums/date-format.enum';

export default class ParamUtils {

    public static parseBooleanParam(value: string | null): boolean | undefined {
        return value ? value?.toLocaleLowerCase() === 'true' : undefined;
    }

    public static parseDateParam(date: string | null): Date | undefined {
        return date ? new Date(format(new Date(date || new Date()), DateFormat.ISO_DATE)) : undefined;
    }
}
