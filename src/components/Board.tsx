import {
  makeStyles,
  Grid,
  createStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Square } from "./Square";

interface Props {
  gameState: string[];
  currentPlayer: string;
  setValue(index: number, player: string): void;
  declareWinner(gameState: string[]): string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      justifyContent: "center",
      spacing: 2,
    },
    title: {
      textAlign: "center",
      fontSize: 45,
      color: "#8fa6b0",
    },
    board: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gridGap: 10,
      padding: theme.spacing(2),
      border: "5px solid #8fa6b0",
    },
    player: {
      fontSize: 45,
      color: "#8fa6b0",
    },
  })
);

export const Board = ({
  gameState,
  currentPlayer,
  setValue,
  declareWinner,
}: Props) => {
  const classes = useStyles();
  const winner = declareWinner(gameState);
  return (
    <>
      <Typography className={classes.title}>Tic Tac Toe</Typography>
      <Grid container className={classes.root}>
        <Grid item>
          <Grid container className={classes.board}>
            {gameState.map((value, index) => (
              <Square
                value={value}
                index={index}
                currentPlayer={currentPlayer}
                setValue={setValue}
              />
            ))}
          </Grid>
        </Grid>
      </Grid>
      {winner ? (
        <Typography className={classes.player}>
          Winner is {winner.toUpperCase()}!
        </Typography>
      ) : (
        <Typography className={classes.player}>
          {currentPlayer.toUpperCase()} Turn
        </Typography>
      )}
    </>
  );
};
