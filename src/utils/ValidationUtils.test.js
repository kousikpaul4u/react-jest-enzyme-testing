import { isEmpty } from "./ValidationUtils";

describe('Validation test', () => {

    test('isEmpty Should return true for object={}', () => {
        const obj = {};
        expect(isEmpty(obj)).toBe(true);
    });

    test('isEmpty Should return false for object={name: "Koushik"}', () => {
        const obj = {
            name: "Koushik"
        };
        expect(isEmpty(obj)).toBe(false);
    });

})
