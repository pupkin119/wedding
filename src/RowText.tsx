import {Grid} from "@mui/material";
import backText from "./images/background/back-text.jpg";
import React from "react";

interface Props {
    text: string
}

export default function RowText(props: Props) {
    return (
        <Grid className={'row-text'} container direction="row" justifyContent="center"
              alignItems="center">
            <Grid item>
                <img className={'flip-image row-image'} src={backText}/>
            </Grid>
            <Grid item>
                <h2 className={"big-text"}>{props.text}</h2>
            </Grid>
            <Grid  item>
                <img className={'row-image'} src={backText}/>
            </Grid>
        </Grid>
    )
}