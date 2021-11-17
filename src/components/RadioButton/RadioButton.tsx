import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import react from "react";

import "./style.css";

interface IRadio{
    heading:string;
    text:string;
    active:boolean;
    onClick:() => void;
}

export const RadioButton:react.FC<IRadio> = (props) => {
    return <div className="checkbox" onClick={(e) => {
        props.onClick()
    }}>
        <Radio onClick={(e) => {
            props.onClick()
        }} checked={props.active} style={{color: "white", transform: "translateY(-10px)"}}></Radio>
        <div>
            <div className="radio__heading">
                {props.heading}
            </div>
            <div className="radio__text">
                {props.text}
            </div>
        </div>
    </div>
}