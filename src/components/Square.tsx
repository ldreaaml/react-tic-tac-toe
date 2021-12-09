import { makeStyles, Theme, createStyles, Grid } from "@material-ui/core";
import React from "react";
import { setConstantValue } from "typescript";

interface Props {
  value: string;
  index: number;
  currentPlayer: string;
  changePlayer(): void;
  setValue(index: number, player: string): void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    square: {
      height: 100,
      width: 100,
      backgroundColor: "#8fa6b0",
      borderRadius: 10,
      fontSize: 65,
      textAlignVertical: "center",
      textAlign: "center",
      color: "white",
    },
    x: {
      backgroundColor: "#f58349",
    },
    o: {
      backgroundColor: "#8ac787",
    },
  })
);

export const Square = ({
  value,
  index,
  currentPlayer,
  changePlayer,
  setValue,
}: Props) => {
  const handleOnClick = (event: any) => {
    // console.log(`Player ${currentPlayer} on ${event.target.id}`);
    setValue(index, currentPlayer);
    changePlayer();
  };

  const classes = useStyles();

  return (
    <Grid item>
      <div
        id={`${index}`}
        className={`
        ${classes.square} 
        ${value === "x" ? classes.x : value === "o" ? classes.o : ""}`}
        onClick={handleOnClick}
      >
        {value}
      </div>
    </Grid>
  );
};
