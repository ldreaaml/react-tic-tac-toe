import { makeStyles, Theme, createStyles, Grid } from "@material-ui/core";
import React from "react";
import { Player, MyTheme } from "./Customizable";

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
      backgroundColor: `${MyTheme.default}`,
      borderRadius: 10,
      fontSize: 65,
      textAlignVertical: "center",
      textAlign: "center",
      color: "white",
    },
    firstPlayer: {
      backgroundColor: `${MyTheme.one}`,
    },
    secondPlayer: {
      backgroundColor: `${MyTheme.two}`,
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
        ${
          value === Player.one
            ? classes.firstPlayer
            : value === Player.two
            ? classes.secondPlayer
            : ""
        }`}
        onClick={handleOnClick}
      >
        {value}
      </div>
    </Grid>
  );
};
