export default class PasswordUtils {

    static generatePassword(passwordLength): string {
        const numberChars = '0123456789';
        const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowerChars = 'abcdefghiklmnopqrstuvwxyz';
        const specialChars = '!@#$%^&*';

        const allChars = numberChars + upperChars + lowerChars + specialChars;
        let randPasswordArray = Array(passwordLength);
        randPasswordArray[0] = numberChars;
        randPasswordArray[1] = upperChars;
        randPasswordArray[2] = lowerChars;
        randPasswordArray[3] = specialChars;
        randPasswordArray = randPasswordArray.fill(allChars, 4);
        return this.shuffleArray(randPasswordArray.map((x) => {
            return x[Math.floor(Math.random() * x.length)];
        })).join('');
    }

    private static shuffleArray(array: any[]) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }
}
