import { AbstractControl } from '@angular/forms';
import moment from 'moment';

export class FormUtils {
    public static dateLessThan(from: string, to: string) {
        return (group: AbstractControl): { [key: string]: any } => {
            const f = group.get(from);
            const t = group.get(to);
            if (f.value > t.value) {
                this.setErrors({['invalidFrom']: true}, f);
                return {
                    invalidFrom: true
                };
            } else {
                this.removeErrors(['invalidFrom'], f);
                return null;
            }
        };
    }

    public static notAfterDaysFromToday = (howManyDaysInTheFuture: number) => (control: AbstractControl): { [key: string]: any } => {
        const currentValue = control.value;

        if (currentValue) {
            moment(currentValue).startOf('day');
            const currentTime = moment(currentValue).startOf('day');
            const maximumTime = moment(new Date()).startOf('day').add(howManyDaysInTheFuture, 'days');

            if (currentTime.isAfter(maximumTime)) {
                return {
                    afterDaysFromToday: true
                };
            }
        }

        return null;
    }

    private static setErrors(error: { [key: string]: any }, control: AbstractControl) {
        control.setErrors({...control.errors, ...error});
    }

    private static removeErrors(keys: string[], control: AbstractControl) {
        const remainingErrors = keys.reduce((errors, key) => {
            delete errors[key];
            return errors;
        }, {...control.errors});
        control.setErrors(Object.keys(remainingErrors).length > 0 ? remainingErrors : null);
    }

}
