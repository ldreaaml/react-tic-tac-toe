import { createStyles, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";

interface Props {
  gameStatus: string;
  currentPlayer: string;
}

const useStyles = makeStyles((theme) => ({
  status: ({ statusColor }: { statusColor: string }) => ({
    color: statusColor,
    fontSize: 40,
    marginTop: 10,
  }),
}));

export const GameStatus = ({ gameStatus, currentPlayer }: Props) => {
  const statusColor =
    gameStatus === "tie"
      ? "#8fa6b0"
      : currentPlayer === "x"
      ? "#f58349"
      : "#8ac787";

  const classes = useStyles({ statusColor });

  //render text displaying player's turn or a winner
  return (
    <>
      {(() => {
        switch (gameStatus) {
          case "win":
            return (
              <Typography className={classes.status}>
                Winner is {currentPlayer.toUpperCase()}!
              </Typography>
            );
          case "tie":
            return (
              <Typography className={classes.status}>It's a tie!</Typography>
            );
          default:
            return (
              <Typography className={classes.status}>
                {currentPlayer.toUpperCase()} Turn
              </Typography>
            );
        }
      })()}
    </>
  );
};
