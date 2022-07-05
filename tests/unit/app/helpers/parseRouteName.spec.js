import parseRouteName from "../../../../src/app/helpers/parseRouteName";

describe('Helpers: parseRouteName', () => {
    test('should delete: -', () => {
        const parsedRoute = parseRouteName('kevin-aron-tapia-cruz')
        expect(parsedRoute).toBe('kevin aron tapia cruz')
    });

    test('should delete: accent', () => {
        const parsedRoute = parseRouteName('brenda-adriana-cruz-ruíz')
        expect(parsedRoute).toBe('brenda adriana cruz ruiz')
    });
});