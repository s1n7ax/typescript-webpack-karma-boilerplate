# typescript-webpack-karma-boilerplate
This project includes really minimal number of dependencies just enough to get started with Typescript and Webpack. Webpack is included for bundling. Multi-browser unit testing with Karma (preconfigured only for chrome). This uses jamine as testing framework.

## Clone the project
```
  git clone https://github.com/s1n7ax/typescript-webpack-karma-boilerplate.git
```

## Install dependencies
```
cd typescript-webpack-karma-boilerplate
yarn install
// or
npm install
```

## Available Scripts
In the project directory, you can run:

### `yarn build` or `npm build`
Build the application. Dist file is generated to `/dist/bundle.js`. That's what you want to link in your application.

### `yarn test` or `npm test`
Run Karma to run test suites
