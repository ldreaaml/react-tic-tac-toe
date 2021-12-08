import { makeStyles, Theme, createStyles, Grid } from "@material-ui/core";
import React from "react";

interface Props {
  value: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    square: {
      height: 100,
      width: 100,
      backgroundColor: "#8fa6b0",
      borderRadius: 10,
    },
    text: {
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

export const Square = ({ value }: Props) => {
  const classes = useStyles();
  return (
    <Grid item>
      <div
        className={`${classes.square} ${
          value === "x" ? classes.x : value === "o" ? classes.o : ""
        }`}
      >
        <div className={classes.text}>{value}</div>
      </div>
    </Grid>
  );
};
