import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import react from "react";

import "./style.css";

export const RadioButton:react.FC = () => {
    return <div className="checkbox">
        <Radio style={{color: "white", transform: "translateY(-10px)"}}></Radio>
        <div>
            <div className="radio__heading">
                Реакция на ухудшение здоровья
            </div>
            <div className="radio__text">
                Влияние стресса будет сразу же компенсироваться: как только возникнет какой-то симптом, человек начинает плохо себя чувствовать, сразу будет предложена контрмера. Это поможет своевременно отслеживать негативное влияние на здоровье.
            </div>
        </div>
    </div>
}