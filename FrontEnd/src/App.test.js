/**
 * @jest-environment jsdom
 */

 import { fireEvent, render, screen } from "@testing-library/react";
 import React from "react";
 import { ReactDOM } from "react";
 import App from "./App";
 import { isTSAnyKeyword } from "@babel/types";
 import '@testing-library/jest-dom'

 test("runs App component sucessfully", () => {
    render(<App />);
  });