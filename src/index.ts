export default class App {
    greet() {
        return 'Hello World';
    }
}

const main = () => {
    const a = new App();
    console.log(a.greet());
};

main();
