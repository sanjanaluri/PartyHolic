/**
 * @jest-environment jsdom
 */

import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { ReactDOM } from "react";
import SignIn from "./pages/signin";
import '@testing-library/jest-dom'

test("Sign In component rendering Sucessfully", () => {
  //   const element = document.createElement("div");
  //   expect(element).not.toBeNull();
  render(<SignIn />);
  const someElement = screen.getByText("SignIn");
  expect(someElement).toBeInTheDocument();
});
