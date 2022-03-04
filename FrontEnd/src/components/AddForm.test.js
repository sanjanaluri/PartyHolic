/**
 * @jest-environment jsdom
 */

import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { ReactDOM } from "react";
import AddForm from "./AddForm";
import { isTSAnyKeyword } from "@babel/types";

test("PartyName should be able to accept text", () => {
  const result = render(<AddForm />);
  const someElement = result.container.querySelector("#Party_name");
  expect(someElement.value).toMatch("");
  fireEvent.change(someElement, { target: { value: "Unit Testing" } });
  expect(someElement.value).toMatch("Unit Testing");
});

test("Should be able to submit the form", () => {
  const mockFunction = jest.fn();
  render(<AddForm handleSubmit={mockFunction} />);
});
