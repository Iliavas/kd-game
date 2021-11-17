import { Corousel } from "../../components/Corousel";
import { DefaultButton } from "../../components/DefaultButton";
import { Slider } from "../../components/Slider";
import "./index.css"
import React, {useState} from "react";
import { animateScroll as scroll } from "react-scroll";
import icon from "../../images/arrow-top.svg"


export const MainScreen:React.FC = () =>{
    let [cas, setCase] = useState("")
    return(
        <div className="mainScreen">
            <div className="headWrap">
                <Slider></Slider>
                <div className="header">Альманах практик будущего</div>

            </div>
            <div className="text">
                <p >
                    <div className="h1">Игра-квест от кружкового движения</div> <br/><br/>
                    Мы в пратиках будушего каждый ень занимаемся решением проблем. <br/><br/>
                    Пройдите наш тест и попробуйте решить одну из таких проблем! Тут надо сказать что-то еще,
                    потому что игра настолько крутая, что нужно говорить очень много и по делу!
                    Так что давайте представим, что тут я написал, ок? <br/><br/>

                    (тесты можно проходить несколько раз)
                </p>
            </div>
            <div className="carouselBox">
                <div className="h2">Выберите один из актуальных кейсов</div>
                <Corousel onChange={(e)=>setCase(e)}></Corousel>
            </div>
            <div className="wrapper">
                <DefaultButton 
                    class="btn"
                    type={cas == ""? "disabled":"contained"} 
                    onClick={
                        ()=>{
                        window.location.href = "/test/1"
                    }}> 
                Вперед!
                </DefaultButton>  
                <div className="choosedCase">
                    {
                        cas == ""? 
                            "Вы пока не выбрали кейс"
                                :
                            "Вы выбрали: " + cas

                    }
                </div>
                <div className="team">PYC</div>
                <div className="copyright">©2021 <a href="https://kruzhok.org/">Кружковое движение</a></div>
                <div onClick={()=>scroll.scrollToTop()} className="scrollToTop"> Перейти в начало страницы <img src={icon}></img></div>
            </div>
            
        </div>
    )
}