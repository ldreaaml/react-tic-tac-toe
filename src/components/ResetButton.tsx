import { Button, createStyles, makeStyles, Theme } from "@material-ui/core";
import React from "react";

interface Props {
  handleReset(): void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    btn: {
      backgroundColor: "#8fa6b0",
      color: "#fff",
      fontSize: 20,
      textAlignVertical: "center",
      padding: 15,
      margin: 20,
    },
  })
);

export const ResetButton = ({ handleReset }: Props) => {
  const classes = useStyles();

  const handleOnClick = (_event: any) => {
    handleReset();
  };

  return (
    <Button
      aria-label="resetButton"
      variant="contained"
      className={classes.btn}
      onClick={handleOnClick}
    >
      Reset Game
    </Button>
  );
};
