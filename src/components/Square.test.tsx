import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Square } from "./Square";

test("renders square with correct value", () => {
  const input = "x";
  render(<Square value={input} index={0}/>);

  const text = screen.getByText(/x/i);
  expect(text).toBeInTheDocument();
});

test("return right index when click on the square", () => {
  const input = "x";
  render(<Square value={input} index={0}/>);

  const text = screen.getByText(/x/i);
  fireEvent.click(text);
  //todo
});