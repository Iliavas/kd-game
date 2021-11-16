import "./corousel.css"
import { Carousel } from '@trendyol-js/react-carousel';

export const Corousel:React.FC = () =>{
    return(
        <Carousel show={1.5} slide={1} swiping={true} leftArrow={<div></div>} rightArrow={<div></div>}>

            <div className="case green"><p>Здоровье <br/> человека</p></div>
            <div className="case pink">Источники энергообеспечения города</div>
            <div className="case purple">Среда доступных возможностей </div>
            <div className="case cian">Профориентация молодых людей</div>

        </Carousel>
        
    )
    
}