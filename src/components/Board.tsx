import { makeStyles, Grid, createStyles, Theme, Paper, Typography } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { spacing } from '@mui/system';
import React from 'react'

interface Props {
    gameState:string[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    board:{
        display: "grid",
        gridTemplateColumns:"repeat(3, 1fr)",
        gridGap: 10,
        padding: theme.spacing(2),
        border: "5px solid #8fa6b0"
    },
    square: {
        height: 100,
        width: 100,
        backgroundColor: "#8fa6b0",
        borderRadius: 10,
    },
    x:{
        fontSize: 65,
        textAlignVertical: "center",textAlign: "center",
        color:"white",
    }
  }),
);


export const Board = ({gameState}: Props) => {
    const classes = useStyles();
        
    return (    
        
    <Grid container justifyContent="center" spacing={2}>
      <Grid item >
        <Grid container className ={classes.board}>
          {gameState.map((value) => (
            <Grid item >
              <div className={classes.square} >
                <div className={classes.x}>{""}</div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grid>      
    </Grid>
    );
}
