import react from "react";
import { DefaultButton } from "../DefaultButton";

import "./style.css";

interface IDialogWindow{
    onAccept:() => void;
    onReject:() => void;
}

export const DialogWindow:react.FC<IDialogWindow> = (props) => {
    return <div className="dialog-window__container">
        <div className="dialog-window__header">
            Вы уверерны, что хотите полностью исключить стресс?
        </div>
        <div className="dialog-window__sub-header">
            Тогда в вашей жизни изменится то-то и то-то а исчезнет то-то и то-то а потом вы вообще станене счастливым
        </div>
        <div className="buttons">
            <DefaultButton onClick={props.onReject}>Еще подумаю</DefaultButton>
            <DefaultButton onClick={props.onAccept}>Да</DefaultButton>
        </div>
    </div>
}