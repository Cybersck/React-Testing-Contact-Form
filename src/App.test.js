import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import ContactForm from './components/ContactForm'
import { act } from "react-dom/test-utils";

test("renders App without crashing", () => {
  render(<App />);
});

test('clears form after submission', () => {

  const {getByLabelText, getByText } = render(<ContactForm/>);


  let firstName = getByLabelText(/first/i);
  const lastName = getByLabelText(/last/i);
  const email = getByLabelText(/email/i);
  const submit = getByText(/submit/i);






  fireEvent.change(firstName, {
    target: {name: 'firstName', value: 'joe'}
  });
  fireEvent.change(lastName, {
    target: {name: 'lastName', value: 'smith'}
  });
  fireEvent.change(email, {
    target: {name: 'email', value: 'lol@lol.com'}
  });




 fireEvent.click(submit);



  expect(firstName.value).toEqual('');


});