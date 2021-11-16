import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import react from "react";
import { RadioButton } from "../RadioButton/RadioButton";

import "./style.css";

export const Task:react.FC = () => {
    return <div className="task">
        <div className="task__header">
            1/3
        </div>
        <span className="task__formulation">
            Как проект будет учитывать влияние стресса на здоровье?
        </span>
        <div className="tasks">
            <RadioButton></RadioButton>
            <RadioButton></RadioButton>
            <RadioButton></RadioButton>
        </div>
    </div>
}