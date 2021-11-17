import "./corousel.css"
import { Carousel } from '@trendyol-js/react-carousel';

export const Corousel:React.FC<{onChange: (name:string)=>void}> = (props) =>{
    const onChoose = (e:any) =>{
        props.onChange(e.target.innerText)
    }
    return(
        <Carousel show={1.5} slide={1} swiping={true} leftArrow={<div></div>} rightArrow={<div></div>}>

            <button onClick={(e)=>onChoose(e)} className="case green">Здоровье человека</button>
            <button onClick={(e)=>onChoose(e)} className="case pink">Источники энергообеспечения города</button>
            <button onClick={(e)=>onChoose(e)} className="case purple">Среда доступных возможностей </button>
            <button onClick={(e)=>onChoose(e)} className="case cian">Профориентация молодых людей</button>

        </Carousel>
        
    )
    
}