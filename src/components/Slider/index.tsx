import React  from "react";
import { slide as Menu } from 'react-burger-menu'
import "./slider.css"

export const Slider : React.FC = () =>{
    const showSettings  = (event:any) => {
        event.preventDefault();

    }
    return(
        <div className="Slider">
        <Menu >
            <div>
                Наша команда верит, что в тут когда-нибудь что-нибудь появится
            </div>
        </Menu>
        </div>
    )
}