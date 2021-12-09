import { Button, createStyles, makeStyles, Theme } from "@material-ui/core";
import React from "react";

interface Props {}

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

export const ResetButton = (props: Props) => {
  const classes = useStyles();
  return (
    <Button
      aria-label="resetButton"
      variant="contained"
      className={classes.btn}
    >
      Reset Game
    </Button>
  );
};
