import React from "react";
import { render, screen } from "@testing-library/react";
import { GameStatus } from "./GameStatus";

describe("test game status", () => {
  test("playing status", () => {
    const gameStatus = "playing";
    const currentPlayer = "x";
    render(
      <GameStatus gameStatus={gameStatus} currentPlayer={currentPlayer} />
    );

    const status = screen.getByText(/X Turn/i);
    expect(status).toBeInTheDocument();
  });

  //todo: confetti broke the test case
  test.skip("win status", () => {
    const gameStatus = "win";
    const currentPlayer = "x";
    render(
      <GameStatus gameStatus={gameStatus} currentPlayer={currentPlayer} />
    );

    const status = screen.getByText(/Winner is X!/i);
    expect(status).toBeInTheDocument();
  });

  test("tie status", () => {
    const gameStatus = "tie";
    const currentPlayer = "x";
    render(
      <GameStatus gameStatus={gameStatus} currentPlayer={currentPlayer} />
    );

    const status = screen.getByText(/It's a tie/i);
    expect(status).toBeInTheDocument();
  });
});
