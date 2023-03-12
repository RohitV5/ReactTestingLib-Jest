What is A/B testing?

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

==RTL Queries==

[getByRole]
    By default there is a role assigned to each type of html element. So no need to explicitly assign a role.
For more info check this link.
Link: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles#:~:text=By%20default%2C%20many%20semantic%20elements,without%20added%20semantics%20return%20null%20.

Link: https://testing-library.com/docs/queries/byrole/

Always try to use GetByRole to capture html elements. If that does not work the go for other query methods.

Note: For input type number the role is spinbutton.


[getByLabelText]
If you want to get label with having a specific test.

[getByPlaceholderText]
If you want to get element having placeholder

[getByDisplayValue]
for getting text input, textarea or selectelement which matching value


[getByAltText]
support elemets which have alt text like img, input, area

[getByTitle]
support element with title attribute. like span.

[getByTestId]
will get element with matching data-testid


When to use which query?
Priority Order for Queries - Your test should resemble how users interact with your code.


Query One                         Query Multiple ELement
=========                         =======================
1.getByRole                 ||      getAllByRole
2.getByLabelText            ||
3.getByPlaceholderText      ||
4.getByText                 ||
5.getByDisplayValue         ||
6.getByAltText              ||
7.getByTitle                \/

You can pass string, regex or function as first element in query.
For substring matching use string and exact = false


getBY return error in case no element found . queryBy will return null if no match found
Useful for asserting an element that is not present.
1.queryBy   ||  queryAllBy



Apperance / Disappearance of HTML elements
==========================================
findByRole | findAllByRole  returns a promise which we can await and provide a timeout after which the find will work.
It has a default timeout of 1000ms which we can overrride.


Manual Queries - you can use hte reqular querySelector DOM API to find the elements


Debugging a Test
=================
screen.debug()  => will print all the content in  the DOM which got rendered from render()
logRoles(renderedView) => will print all the roles in the current DOM.

Chrome plugin to help during testing
====================================
Testing Playground - (comes with a frog icon)


Handling User Events
====================
user-event vs fireEvent

fireEvent is a method from RTL which is used to dispatch DOM events.

user-events simulates full interaction which may fire multiple events 
and do aditional checks along the way. 

For eg when user is clicks a button it fires a  onhover event also.
For eg when user types into a textbox the element has to be focused and then the keyboard and input events are fired.\\


user-events allow you to describe a user interaction instead of a concrete event.

Pointer Interactions
====================
click(), dblClick(), tripleClick(), hover() and unhover()



Pointer APIs (Low level)
=============
pointer({keys:'[MouseLeft]'}) left button click
pointer({keys:'[MouseLeft][MouseRight]'}) left click followed by right click
pointer('[MouseLeft][Mouseright]')   same , used only if keys is only argument to be passed
pointer('[MouseLeft>]')  > for mouseleft keypressdown
pointer('[/MouseLeft])  / for mouse left release



Keyboard Interactions
=====================
input
copy cut
paste


KeyboardAPI (Low level)
keyboard('foo')   type foo
keyboard('{Shift}A{/Shift}')  Hold A


Testing with HOC
=================
to test a component with wrapper function we can add wrapper property in render method.
Alternatively we can create util for all tests that require wrapper 
https://testing-library.com/docs/react-testing-library/setup/

Check test-utils.tsx file

If needs to add HOC for all the components then add custom renderer which will provide all that HOC
https://testing-library.com/docs/react-testing-library/setup/#custom-render


Testing Custom Hooks
=====================
RenderHook method from RTL.

Act will update the component state cause by any operation like custom hook call.

Dummy Function
===============
 jest.fn() //dummy function

 Mocking HTTP Request
 ====================
 MSW package

 For Mocking Redux Store
 ========================
 https://www.npmjs.com/package/redux-mock-store
 https://www.youtube.com/watch?v=2gGnszizizY&t=304s&ab_channel=ImranCodesReact





Static Ananlysis testing (code is written in a certain way or not)
========================
Process of verifying that your code meets certain expectation without actually running it
Ensure consistent style and formatting
Check for common mistakes and possible bugs
Limit the complexity of code and
Verify type consistency

Tools for static testing
========================
Typescript
Eslint
Prettier
Husky
lint-staged
