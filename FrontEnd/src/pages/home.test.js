/**
 * @jest-environment jsdom
 */

import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { ReactDOM } from "react";
import Home from "./home";
import { isTSAnyKeyword } from "@babel/types";
import "@testing-library/jest-dom";

test("runs without error for the home component", () => {
  const tailwindcss = require("tailwindcss");
  const generatePluginCss = (options = {}) => {
    return postcss(tailwindcss())
      .process("@tailwind utilities;", {
        from: undefined,
      })
      .then((result) => result.css);
  };
});
