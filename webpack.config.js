// IMPORTS
const path = require('path');

// VAR
const mode = process.env.NODE_ENV;

// LOG
console.log('-------- Webpack Conf--------');
console.log(`mode :: ${mode}`);
console.log('-----------------------------');

const development = {
    mode,
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};

const production = {
    mode,
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};

// CONF
const config = {
    development,
    production
};

module.exports = config[mode];
