/**
 * @jest-environment jsdom
 */

import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { ReactDOM } from "react";
import ZipCode from "./Zipcode";
import { isTSAnyKeyword } from "@babel/types";

// isTSAnyKeyword("renders without crashing", ()=>{
//     const div = document.createElement("div");
//     ReactDOM.render(<ZipCode/>, div)
// })
test("Checking Zipcode component", () => {
//   const element = document.createElement("div");
//   expect(element).not.toBeNull();
render(<ZipCode/>)
});

test("Checking Zipcode component", () => {
    //   const element = document.createElement("div");
    //   expect(element).not.toBeNull();
    render(<ZipCode/>);
    
    });
