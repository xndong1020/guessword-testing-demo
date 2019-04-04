## Dependencies

```js
yarn add ajv
yarn add -D enzyme enzyme-adapter-react-16 jest jest-enzyme 
```


## globally config enzyme
src/setupTest.js
```js
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

```
and use this path for `setupFilesAfterEnv` item in jest config file(see below)

## jest config file
```js
module.exports = {
  setupFilesAfterEnv: ['<rootDir>src/setupTests.js'],
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],
  resolver: 'jest-pnp-resolver',
  setupFiles: ['react-app-polyfill/jsdom'],
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  testPathIgnorePatterns: ['/node_modules/', '/scripts/'],
  testEnvironment: 'jsdom',
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)':
      '<rootDir>/config/jest/fileTransform.js'
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$'
  ],
  moduleNameMapper: {
    '^react-native$': 'react-native-web',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '^.+\\.module\\.(css|sass|scss|less)$': 'identity-obj-proxy'
  },
  moduleFileExtensions: [
    'web.js',
    'js',
    'web.ts',
    'ts',
    'web.tsx',
    'tsx',
    'json',
    'web.jsx',
    'jsx',
    'node'
  ],
  watchPlugins: [
    '<rootDir>/node_modules/jest-watch-typeahead/filename.js',
    '<rootDir>/node_modules/jest-watch-typeahead/testname.js'
  ]
}

```

## setup mock globally
__mocks__/fileMock.js

```js
module.exports = 'test-file-stub'
```

## tdd: first test: App.test.js
```js
import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

test('renders without error', () => {
  const wrapper = shallow(<App />)
  const appComponent =  wrapper.find("[data-test='component-app']")
  expect(appComponent.length).toBe(1)
})

test('renders increment button', () => {})

test('renders counter display', () => {})

test('counter start at 0', () => {})

test('clicking button increments counter display', () => {})
```