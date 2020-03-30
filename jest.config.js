const {defaults} = require('jest-config');
module.exports = {
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx', "js", "jsx"],
    modulePaths: ["<rootDir>/src/"],
    transform: {
        '^.+\\.(ts|tsx)?$': 'ts-jest',
        "^.+\\.(js|jsx)$": "babel-jest",
        ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub"
    }
};