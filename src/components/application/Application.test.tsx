import { render, screen } from '@testing-library/react'
import { Application } from './Application'

describe('Application', () => {
  test('renders', () => {
    render(<Application />)

    /** getByRole */

    // for h1 and content as Job application form
    const pageHeading = screen.getByRole('heading', {
      level: 1,name:'Job application form'
    })
    expect(pageHeading).toBeInTheDocument()

    //  for h2
    const sectionHeading = screen.getByRole('heading', {
      level: 2,
    })
    expect(sectionHeading).toBeInTheDocument()

    // Get by role and content in textbox should match to Name. 
    //If multiple result are found then test case will throw an error
    // <label htmlFor="name">Name</label>
    const nameElement = screen.getByRole('textbox', {
      name: 'Name',  //name refers to content inside label tag
    })
    expect(nameElement).toBeInTheDocument()

    const bioElement = screen.getByRole('textbox', {
      name: 'Bio',
    })
    expect(bioElement).toBeInTheDocument()

    const jobLocationElement = screen.getByRole('combobox')
    expect(jobLocationElement).toBeInTheDocument()

    const termsElement = screen.getByRole('checkbox')
    expect(termsElement).toBeInTheDocument()

    const submitElement = screen.getByRole('button')
    expect(submitElement).toBeInTheDocument()
    expect(submitElement).toBeDisabled()

    /** getByLabelText */

    const nameElement2 = screen.getByLabelText('Name', { selector: 'input' })
    expect(nameElement2).toBeInTheDocument()

    const termsElement2 = screen.getByLabelText(
      'I agree to the terms and conditions'
    )
    expect(termsElement2).toBeInTheDocument()

    /** getByPlaceholderText */

    const nameElement3 = screen.getByPlaceholderText('Fullname')
    expect(nameElement3).toBeInTheDocument()

    /** getByText */

    const paragraphElement = screen.getByText('All fields are mandatory')
    expect(paragraphElement).toBeInTheDocument()

    /** getByDisplayValue */

    const nameElement4 = screen.getByDisplayValue('Rohit')
    expect(nameElement4).toBeInTheDocument()

    /** getByAltText */

    const imageElement = screen.getByAltText('a person with a laptop')
    expect(imageElement).toBeInTheDocument()

    /** getByTitle */

    const closeElement = screen.getByTitle('close')
    expect(closeElement).toBeInTheDocument()

    /** getByTestId */

    const customElement = screen.getByTestId('custom-element')
    expect(customElement).toBeInTheDocument()
  })
})
