import { makeStyles, Theme, createStyles, Grid } from "@material-ui/core";
import React from "react";

interface Props {
  value: string; //current state of the square
  index: number;
  setValue(index: number): void;
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

export const Square = ({ value, index, setValue }: Props) => {
  const classes = useStyles();
  const handleOnClick = (event: any) => {
    setValue(index);
  };

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
