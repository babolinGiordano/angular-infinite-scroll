import { TaskDTO } from '../../shared/task/dto/task.dto';
import ObjectUtils from './object-utils';
import { EmployeeDTO } from '../../shared/employee/dto/employee.dto';

describe('ObjectUtils', () => {

    describe('copyObjectToAnother', () => {
        it('should copy simple property', () => {
            const source = new TaskDTO();
            source.id = '12';

            const destination = new TaskDTO();

            ObjectUtils.copyObjectToAnother(source, destination);

            expect(destination.id).toEqual('12');
        });

        it('should copy complex property', () => {
            const assignee = new EmployeeDTO();
            assignee.fullName = 'Franco Franchi';

            const source = new TaskDTO();
            source.assignee = assignee;

            const destination = new TaskDTO();

            ObjectUtils.copyObjectToAnother(source, destination);

            expect(destination.assignee.fullName).toEqual('Franco Franchi');
        });

        it('should nullify value previously filled', () => {
            const source = new TaskDTO();
            source.duration = undefined;

            const destination = new TaskDTO();
            destination.duration = 12;

            ObjectUtils.copyObjectToAnother(source, destination);

            expect(destination.duration).toBeUndefined();
        });

        it('should manage different types', () => {
            const source = new TaskDTO();
            source.id = '1';
            source.duration = 3;

            const destination = new EmployeeDTO();
            destination.id = '2';
            destination.email = 'franco@franchi.it';

            ObjectUtils.copyObjectToAnother(source, destination);

            expect(destination.id).toBe('1');
            expect(destination.email).toBe('franco@franchi.it');
        });

        it('should manage undefined source', () => {
            const source = undefined;

            const destination = new EmployeeDTO();
            destination.id = '2';
            destination.email = 'franco@franchi.it';

            ObjectUtils.copyObjectToAnother(source, destination);

            expect(destination.id).toBe('2');
            expect(destination.email).toBe('franco@franchi.it');
        });

        it('should manage undefined destination', () => {
            const source = new EmployeeDTO();
            source.id = '2';
            source.email = 'franco@franchi.it';

            const destination = undefined;

            ObjectUtils.copyObjectToAnother(source, destination);

            expect(destination).toBeUndefined();
        });
    });
});
