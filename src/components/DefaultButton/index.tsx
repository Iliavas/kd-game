import React from "react";
import "./button.css"

interface IDefBtn{
    active?:boolean
    class?:string
    onClick: ()=>void
}

export const DefaultButton:React.FC<IDefBtn> = (props) =>{
    return(
        <button
            onClick={() =>props.active == false? null: props.onClick()}
            className={"defBtn" + " " + props.class + " " + (props.active == false? "disactive":"")}
        >
            {props.children}
        </button>
    );
}