// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';


import {server} from './mocks/server'
// Estabilishing API Mocking before all test.
beforeAll(()=> server.listen())


//Reset any request handlers taht we may add during the tests
afterEach(()=> server.restoreHandlers())


// Clean up after the tests are finished.
afterAll(()=> server.close())