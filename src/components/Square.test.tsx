import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Square } from "./Square";

describe("test square", () => {
  test("render square with correct value", () => {
    const value = "x";
    const index = 0;
    render(<Square value={value} index={index} setValue={() => {}} />);

    const text = screen.getByText(/x/i);
    expect(text).toBeInTheDocument();
  });

  test.skip("return right index when click on the square", () => {
    //todo
  });
});
