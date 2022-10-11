import React, { useState } from "react";
import background2 from '../img/background2.png'
import arrowDown from '../img/arrow-down.png'
import arrowUp from '../img/arrow-up.png'
import questionImg from '../img/dropdown-dron.png'

let Questions = () => {
    let [isActive, setIsActive] = useState(false)
    let [index, setIndex] = useState(null)


    let dropDownInfo = [
        {
            id: 1,
            text: 'Летные характеристики обоих квадрокоптеров DJI Mavic 2 Pro и Zoom ничем не отличаются. Максимальная скорость 72 км/ч, что приблизительно равно 48 милям в час. Полетное время у обоих составляет до 31 минуты. Кроме того, они снимают видео 4К со скоростью до 100 Mбит/c..',
            title: 'Какие отличия между Mavic 2 Pro и Mavic 2 Zoom?',
        },
        {
            id: 2,
            text: 'В Mavic 2 улучшены практически все аспекты: камера, передача видеосигнала, полётное время, скорость, уровень шума, обнаружение препятствий в нескольких направлениях, интеллектуальные функции и уникальная функция Hyperlapse (гиперлапс).',
            title: 'Чем Mavic 2 лучше Mavic Pro?',
        },
        {
            id: 3,
            text: 'Mavic 2 поддерживает версию 01.04.0500 (и выше) очков DJI Goggles и версию 01.00.0600 (и выше) очков DJI Goggles RE. Пожалуйста, учтите, что очки DJI Goggles поддерживают только частоту 2,4 ГГц, а модель DJI Goggles RE работает, как на частоте 2,4, так и на частоте 5,8 ГГц, что упрощает процесс подключения.',
            title: 'Можно ли подключить Mavic 2 к очкам DJI Goggles?',
        },
        {
            id: 4,
            text: 'Mavic 2 Pro оборудован новой камерой Hasselblad L1D-20C. Зона активной работы новой 1-дюймовой матрицы CMOS в четыре раза превышает показатели Mavic Pro. Большая матрица также обеспечивает лучшее качество при слабом освещении за счет более широкого диапазона ISO. Максимальный показатель ISO был повышен с 3200 до 12800.            ',
            title: 'Является ли Mavic 2 водонепроницаемым？',
        },
    ]

    // let activeClass = () => {
    //     if(isActive === true && id == index){
    //         return 
    //     } else(
            
    //     )
    // }

    
    let dropDown = (id) => {
        setIndex(index = id)
        setIsActive(!isActive)
    }

    return (
        <>
            <div className="background-div">
                <img className="background" src={background2}/>  
            </div>
            <div className="questions">
                <div>
                    <div className="questions-title">
                        Остались вопросы?
                    </div>
                    <div className="">
                        {
                            dropDownInfo.map(({id, text, title}) => (
                                <div key={id} className="questions-drop-down nonpadding">
                                    <div className="questions-drop-down-content">
                                        <div className="questions-drop-down-title">
                                            {title}
                                        </div>
                                        <div className={isActive && index == id ? 'active-drop-down' : 'nonactive-drop-down'}>
                                            <div className="questions-drop-down-text ">
                                                {text}   
                                            </div>
                                        </div>
                                    </div>
                                    <div className="questions-drop-down-btn-div">
                                        <div onClick={() => dropDown(id)} className="questions-drop-down-btn">
                                            <img src={isActive && id == index ? arrowUp : arrowDown}/>
                                        </div>
                                    </div>
                            
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div>
                    <div className="question-img">
                        <img src={questionImg}/>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Questions