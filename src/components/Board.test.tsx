import React from "react";
import { render, screen } from "@testing-library/react";
import { Board } from "./Board";

test("renders learn react link", () => {
  const currentState: string[] = ["", "", "", "", "", "", "", "", ""];

  const { container } = render(<Board gameState={currentState} />);

  //todo: fix test case
  expect(container.getElementsByClassName("board").length).toBe(9);
});
