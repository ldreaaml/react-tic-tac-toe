import React from "react";
import { render, screen } from "@testing-library/react";
import { ResetButton } from "./ResetButton";

test("renders resetButton", () => {
  render(<ResetButton />);

  const btn = screen.getByRole("button", { name: /resetButton/i });
  expect(btn).toBeInTheDocument();
});
