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

    Code coverage gives what percentage of code is tested

    Statement coverage - How many statements have been tested.
    Branches coverage - How many branches of the control structure (if statement for instance ) has been executed
    Function coverage - How many functions defined test
    Line Coverage - How many lines tested

    What to test?
    Test the component renders
    Test component renders with props
    Test component renders in different states
    Test component reacts to events

    What not to test
    Implementation details (test only the behaviour, not how behaviour is implemented)
    Third party code
    Code that is not important from user point of view. (utils and shared)


    RTL Queries
    Every test we write involvoes generally the following basic steps
    1.Render the component (render)
    2.Find an element rendered by the components  
    3.Assert against the element found in step 2 which will pass or fail the test.  (expect)

    Queries are the method that testing library provides to find the element on the page.

    To find single element getBy, queryBy, findBy

    To find multiple getAllBy, queryAllBy , findAllBy

    The suffix can be on the role, labeltext, placeholder text, displayvalue, alttext, title and finally testid.



