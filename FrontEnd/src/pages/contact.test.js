/**
 * @jest-environment jsdom
 */

import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { ReactDOM } from "react";
import Contact from "./contact";
import { isTSAnyKeyword } from "@babel/types";

test("Checking Contact component", () => {
  //   const element = document.createElement("div");
  //   expect(element).not.toBeNull();
  render(<Contact />);
  const firstName = screen.getByLabelText("First Name");
  expect(firstName.value).toMatch("");
  fireEvent.change(firstName, { target: { value: "Unit Testing" } });
  expect(firstName.value).toMatch("Unit Testing");
});

test("user should be able to submit the contact form", () => {
  const mockFunction = jest.fn();
  render(<Contact handleSubmit={mockFunction} />);
  const buttonNode = screen.getByRole("dialog");
  fireEvent.submit(buttonNode);
});
