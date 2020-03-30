// these imports are something you'd normally configure Jest to import for you
// automatically. Learn more in the setup docs: https://testing-library.com/docs/react-testing-library/setup#cleanup
import '@testing-library/jest-dom';
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import ErrorDisplay from './ErrorDisplay';

describe("ErrorDisplay", () => { 
    test('shows the children when the checkbox is checked', () => {
        const errorMessage = "test message";
        const expected = "Something went wrong: " + JSON.stringify({ "error": errorMessage });

        render(<ErrorDisplay error={ { error: errorMessage } } />);
      
        // query* functions will return the element or null if it cannot be found
        // get* functions will return the element or throw an error if it cannot be found
        //expect(screen.queryByText(testMessage)).toBeNull()
      
        // the queries can accept a regex to make your selectors more resilient to content tweaks and changes.
        //fireEvent.click(screen.getByLabelText(/show/i))
      
        // .toBeInTheDocument() is an assertion that comes from jest-dom
        // otherwise you could use .toBeDefined()
        expect(screen.getByText(expected)).toBeInTheDocument();
    })
});