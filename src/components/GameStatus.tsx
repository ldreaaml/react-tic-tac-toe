import { makeStyles, Typography } from "@material-ui/core";
import Confetti from "react-confetti";
import { MyTheme, Player } from "./Customizable";

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
      ? `${MyTheme.default}`
      : currentPlayer === Player.one
      ? `${MyTheme.one}`
      : `${MyTheme.two}`;

  const classes = useStyles({ statusColor });

  return (
    <>
      {(() => {
        switch (gameStatus) {
          case "win":
            return (
              <>
                <Typography className={classes.status}>
                  Winner is {currentPlayer.toUpperCase()}!
                </Typography>
                <Confetti colors={[statusColor, "#c3d9e3"]} />
              </>
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
