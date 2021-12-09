import React from "react";
import { render, screen } from "@testing-library/react";
import { Board } from "./Board";

describe("test board", () => {
  test.skip("renders board", () => {
    const currentState: string[] = ["", "", "", "", "", "", "", "", ""];
    const { container } = render(
      <Board gameState={currentState} setValue={() => {}} />
    );

    //todo: fix test case
    expect(container.getElementsByClassName("board").length).toBe(9);
  });
});
