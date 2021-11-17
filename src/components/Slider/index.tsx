import React  from "react";
import "./slider.css";
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton'

import ReorderIcon from '@mui/icons-material/Reorder';

export const Slider : React.FC = () =>{
    const [state, setState] = React.useState({
        left: false,

      });
    
      const toggleDrawer = (anchor:string, open:boolean) => (event:any) => {
        if (
          event &&
          event.type === 'keydown' &&
          (event.key === 'Tab' || event.key === 'Shift')
        ) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    

    
      return (
        <div>
          {['left'].map((anchor:string) => (
            <React.Fragment key={anchor}>
              <IconButton onClick={toggleDrawer(anchor, true)} color="primary"><ReorderIcon fontSize="large" sx={{ color: "white" }} ></ReorderIcon>
</IconButton>
              <SwipeableDrawer
                anchor={"left"}
                open={state.left}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
              >
                <Box
                    sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
                    role="presentation"
                    onClick={toggleDrawer(anchor, false)}
                    onKeyDown={toggleDrawer(anchor, false)}
                >
                    <div className="SliderContent">
                        Наша команда верит, что в тут когда-нибудь что-нибудь появится

                    </div>
            
                </Box>
              </SwipeableDrawer>
            </React.Fragment>
          ))}
        </div>
      );
}
    
