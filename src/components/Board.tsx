import {
  makeStyles,
  Grid,
  createStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Square } from "./Square";
import { MyTheme } from "./Customizable";

interface Props {
  gameState: string[];
  setValue(index: number): void;
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
      color: `${MyTheme.default}`,
    },
    board: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gridGap: 10,
      padding: theme.spacing(2),
      border: `5px solid ${MyTheme.default}`,
    },
  })
);

export const Board = ({ gameState, setValue }: Props) => {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.title}>Tic Tac Toe</Typography>
      <Grid container className={classes.root}>
        <Grid item>
          <Grid container className={classes.board}>
            {gameState.map((value, index) => (
              <Square value={value} index={index} setValue={setValue} />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
