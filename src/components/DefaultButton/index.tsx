import React from "react";
import "./button.css"
import Button from '@mui/material/Button';

interface IDefBtn{
    class?:string
    onClick: ()=>void
    type?: "contained" | "outlined" | "disabled"
}

export const DefaultButton:React.FC<IDefBtn> = (props) =>{
    return(
        <Button
            variant={props.type == ("contained" || "disabled") ? "contained":"outlined"}
            disabled={props.type == "disabled"}
            onClick={() =>props.type == "disabled"? null: props.onClick()}
            className={"defBtn" + " " + props.class + " " + (props.type == "disabled" ? "disactive":"") + " " + (props.type == "outlined"? "outline":"")}
        >
            {props.children}
        </Button>
    );
}