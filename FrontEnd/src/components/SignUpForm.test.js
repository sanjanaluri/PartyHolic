/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import SignUpForm from "./SignUpForm";
import { isEmailValid } from "../Utils/validations";

describe("login", () => {
  let props, wrapper;

  test("Validate Email on Sign Up", () => {
    const test = "alekhyagollam68@gmail.com";
    expect(isEmailValid(test)).toBe(true);
  });

  test("Fail Validate on Wrong Input", () => {
    const test = "ABCDEFGH";
    expect(isEmailValid(test)).not.toBe(true);
  });

  test("Check Placeholder for Email", () => {
    render(<SignUpForm />);
    screen.queryByPlaceholderText("Enter Email Address");
  });

  test("Login form Submitted", () => {
    const mockFunction = jest.fn();
    //const buttonNode = screen.getByRole("submit");
    //   fireEvent.submit(buttonNode);
  });
});
