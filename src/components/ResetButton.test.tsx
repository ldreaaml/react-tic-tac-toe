import React from "react";
import { render, screen } from "@testing-library/react";
import { ResetButton } from "./ResetButton";

describe("test reset button", () => {
  test.only("render button", () => {
    render(<ResetButton handleReset={() => {}} />);

    const btn = screen.getByRole("button", { name: /resetButton/i });
    expect(btn).toBeInTheDocument();
  });
});
