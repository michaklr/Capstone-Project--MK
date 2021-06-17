import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import styled from "styled-components/macro";
import {ReactComponent as RandomLogo} from "../img/Mental.svg";


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

export default function FloatingActionButtons() {
    const classes = useStyles();

    return (
        <div className={classes.root}>


            <Fab variant="extended">
                Test starten
            </Fab>

        </div>
    );
}