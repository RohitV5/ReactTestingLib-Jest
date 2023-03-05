To run test


    "@testing-library/jest-dom": "^5.16.5", <= Tools to run test (Test Runner)
    "@testing-library/react": "^13.4.0",  <= Tools to write test

    cmd: npm run test

    TDD is a software development process where you write test before writing the software code.

    Once the test have been written you then write the code to ensure that the tests pass.

    1.Create test that verify the functionality of a specific feature.

    test function for individual test, describe function to group  tests.

    use test.skip() to describe.only() skep any particular test

    use test.only() or describe.only() to run any specific test.

    Test Suite refers to one file of test.

    Test file can be named as test.tsx or spec.tsx
    All files in __tests__ folder are also tested with extension .tsx and .ts