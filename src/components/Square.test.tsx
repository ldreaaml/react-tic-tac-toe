import React from "react";
import { render, screen } from "@testing-library/react";
import { Square } from "./Square";

test("renders square with correct value", () => {
  const input = "x";
  render(<Square value={input} />);

  const text = screen.getByText(/x/i);
  expect(text).toBeInTheDocument();
});
