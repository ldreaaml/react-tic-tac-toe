import { makeStyles, Grid, createStyles, Theme, Paper, Typography } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { spacing } from '@mui/system';
import React from 'react'

interface Props {
    gameState:string[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root:{
        justifyContent:"center",
        spacing:2,
    },
    title:{
        textAlign:"center",
        fontSize: 45,
        color: "#8fa6b0",
    },
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
    text:{
        fontSize: 65,
        textAlignVertical: "center",
        textAlign: "center",
        color:"white",
    },
    x:{
        backgroundColor: "#f58349",
    },
    o:{
        backgroundColor: "#8ac787",
    }
  }),
);

export const Board = ({gameState}: Props) => {
    const classes = useStyles();
        
    return (    
    <>
    <Typography className={classes.title}>Tic Tac Toe</Typography>
    <Grid container className={classes.root}>
      <Grid item >
        <Grid container className ={classes.board}>
          {gameState.map((value) => (
            <Grid item >
              <div className={`${classes.square} ${value==="x"? classes.x: value==="o"?classes.o:""}`} >
                <div className={classes.text} >{value}</div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grid>      
    </Grid>
    </>
    );
}
