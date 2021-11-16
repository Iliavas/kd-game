import react from "react";
import "./index.css";
import Hammer from "react-hammerjs";
import { Task } from "../../components/Task/Task";
import { FormControl, RadioGroup } from "@mui/material";


export const TestCompletion:react.FC = () => {
    return <div className="base-container">

        <div className="header">
            <span>Источники энергообеспечения города</span>
        </div>
        
        <div className="content">    
            <Task></Task>
        </div>
    
    </div>
}