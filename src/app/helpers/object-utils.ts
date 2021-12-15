export default class ObjectUtils {

    static isNotEmpty(obj): boolean {
        return Object.keys(obj).length !== 0;
    }

    static isNullOrEmptyUndefined(obj): boolean {
        return this.isNullOrUndefined(obj) || obj === '';
    }

    static isNullOrUndefined(obj): boolean {
        return obj === null || obj === undefined;
    }

    static copyObjectToAnother(source: any, destination: any) {
        if (!this.isNullOrUndefined(destination)) {
            for (const k in source) {
                destination[k] = source[k];
            }
        }
    }
}
