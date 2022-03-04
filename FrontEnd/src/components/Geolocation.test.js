
 /**
  * @jest-environment jsdom
  */
 
 import { fireEvent, render, screen,mount } from "@testing-library/react";
 import React from "react";
 import { ReactDOM } from "react";
 import Geolocation from "./Geolocation";
 import { isTSAnyKeyword } from "@babel/types";
 
      
      test("Should be able to submit the Geolocation", () => {
        const mockFunction = jest.fn();
        render(<Geolocation handleSubmit={mockFunction} />);
      });

      test("Should render the geolocation component", () => {
        render(<Geolocation/>);
        });