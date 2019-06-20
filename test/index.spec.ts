import App from '../src/index';

describe('A suite', function() {
    it('Greet Test Case', function() {
        let a = new App();
        expect(a.greet()).toBe('Hello World');
    });
});

describe('True Test Case', () => {
    it('contains', () => {
        expect(true).toBe(false);
    });
});
