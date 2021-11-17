import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import react from "react";
import { act } from "react-dom/test-utils";
import { DefaultButton } from "../DefaultButton";
import { DialogWindow } from "../DialogWindow/DialogWindow";
import { RadioButton } from "../RadioButton/RadioButton";

import "./style.css";

interface ITask{
    variants: {
        heading: string,
        text: string
    }[];
    header:string;
    numberInHierarchy:string;
    inactive:boolean;
}

export const Task:react.FC<ITask> = (props) => {
    const [active, setActive] = react.useState("")
    const [tasks, setTasks] = react.useState(props.variants)
    const [showMenu, setShowMenu] = react.useState(false);
    const [isAccepted, setIsAccepted] = react.useState(false);

    react.useEffect(() => {
        if (!props.inactive && showMenu) {
            document.body.style.overflow = "hidden";
        }
        else {
            document.body.style.overflow = "scroll";
        }
    })
    return <div className="task">
        <div className="task__header">
            {props.numberInHierarchy}
        </div>
        <span className="task__formulation">
            {props.header}
        </span>
        <div className="tasks">
            {
                tasks.map((e) => <RadioButton
                {...e}
                active={e.text == active}
                onClick={() => {
                    if (isAccepted) return;
                    setActive(e.text)
                }}
                ></RadioButton>)
            }
            {
                showMenu ? <DialogWindow
                    onAccept={() => {
                        setIsAccepted(true);
                        setShowMenu(false);
                    }}
                    onReject={() => {
                        setShowMenu(false);
                    }}
                ></DialogWindow> :
                <DefaultButton 
                    onClick={() => {
                        setShowMenu(true)
                    }} 
                    active={ isAccepted ? false : (active.length)?true:false}
                    >
                    {
                        isAccepted ? "Вы уже выбрали ответ" : active.length ? "Дальше" : "Подтвердить"
                    }
                </DefaultButton>
            }
            
        </div>
    </div>
}