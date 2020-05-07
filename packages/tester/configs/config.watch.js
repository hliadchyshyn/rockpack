const { existsSync } = require('fs');
const path = require('path');

const rootFolder = path.resolve(__dirname, '..');

const currentProjectFolder = path.dirname(require.main.filename);

let tsConfig = path.resolve(__dirname, 'tsconfig.json');

if (existsSync(path.resolve(currentProjectFolder, './tsconfig.js'))) {
  tsConfig = path.resolve(currentProjectFolder, './tsconfig.js');
}

if (existsSync(path.resolve(currentProjectFolder, './tsconfig.json'))) {
  tsConfig = path.resolve(currentProjectFolder, './tsconfig.json');
}

const setupFiles = [
  `${rootFolder}/configs/jest.config.js`
];

if (existsSync(path.resolve(currentProjectFolder, './jest.config.js'))) {
  setupFiles.push('<rootDir>/jest.config.js');
}

if (existsSync(path.resolve(currentProjectFolder, './enzyme.config.js'))) {
  setupFiles.push('<rootDir>/enzyme.config.js');
}

module.exports = {
  transform: {
    '^.+\\.(ts|tsx)$': require.resolve('ts-jest'),
    '^.+\\.(js|jsx|ts|tsx)$': `${rootFolder}/modules/babelJest.js`,
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `${rootFolder}/modules/fileTransformer.js`
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sss|styl)$': `${rootFolder}/modules/identityObjProxy.js`
  },
  transformIgnorePatterns: [
    'node_modules/'
  ],
  moduleFileExtensions: [
    'js', 'jsx', 'json', 'ts', 'tsx'
  ],
  testPathIgnorePatterns: [
    '<rootDir>/(build|docs|node_modules)/'
  ],
  setupFiles,
  setupFilesAfterEnv: [
    require.resolve('jest-extended'),
    require.resolve('expect-more-jest'),
    require.resolve('jest-generator'),
    require.resolve('jest-chain'),
    require.resolve('@testing-library/jest-dom/extend-expect')
  ],
  globals: {
    'ts-jest': {
      diagnostics: false,
      tsConfig
    }
  }
};
