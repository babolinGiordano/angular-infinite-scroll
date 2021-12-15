import { FormUtils } from './form-utils';
import { FormControl } from '@angular/forms';
import moment from 'moment';
import { TestUtils } from '../../test/test-utils.spec';
import Clock = jasmine.Clock;

describe('FormUtils', () => {

    let clock: Clock;

    afterEach(() => {
        if (clock) {
            TestUtils.uninstallClock(clock);
        }
    });

    describe('notAfterDaysFromToday', () => {

        it('should not validate empty value', () => {
            const formControl = new FormControl();
            formControl.setValue(undefined);

            const res = FormUtils.notAfterDaysFromToday(0).apply(null, [formControl]);

            expect(res).toBeNull();
        });

        it('should be valid because is today', () => {
            clock = TestUtils.installClock(678499200000); // 03 july 1991

            const formControl = new FormControl();
            formControl.setValue(moment.utc('1991-07-03').toDate());

            const res = FormUtils.notAfterDaysFromToday(0).apply(null, [formControl]);

            expect(res).toBeNull();
        });

        it('should be valid because is in range', () => {
            clock = TestUtils.installClock(678499200000); // 03 july 1991

            const formControl = new FormControl();
            formControl.setValue(moment.utc('1991-07-04').toDate());

            const res = FormUtils.notAfterDaysFromToday(1).apply(null, [formControl]);

            expect(res).toBeNull();
        });

        it('should be invalid because is out of range', () => {
            clock = TestUtils.installClock(678499200000); // 03 july 1991

            const formControl = new FormControl();
            formControl.setValue(moment.utc('1991-07-05').toDate());

            const res = FormUtils.notAfterDaysFromToday(1).apply(null, [formControl]);

            expect(res.afterDaysFromToday).toBeTrue();
        });

    });

});
