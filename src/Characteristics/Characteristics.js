import React from "react";
import background2 from '../img/background2.png'
import dron from '../img/dron.png'

let Characteristics = () => {
    return (
        <>
            <div className="background-div">
                <img className="background" src={background2}/>  
            </div>
            <div className="characteristics">
                <div className="characteristics-title">
                    Характеристики
                </div>
                <div className="characteristics-content">
                    <div className="characteristics-content-img-div">
                        <img src={dron}/>
                    </div>
                    <div className="characteristics-content-cells">
                        <div className="characteristics-content-cell">
                            <div className="characteristics-content-cell-title">
                                Dlog-M 10 бит
                            </div>
                            <div className="characteristics-content-cell-text">
                                Mavic 2 Pro поддерживает цветовой профиль Dlog-M 10 бит с более широким динамическим диапазоном, дающим больше возможностей для цветокоррекции.
                            </div>
                            <div className="characteristics-content-cell-title char-cont-title-bottom">
                                Матрица CMOS 1
                            </div>
                            <div className="characteristics-content-cell-text">
                                Зона активной работы новой 1-дюймовой матрицы CMOS в четыре раза превышает показатели Mavic Pro
                            </div>
                        </div>
                        <div className="characteristics-content-cell">
                            <div className="characteristics-content-cell-title">
                                Камера Hasselblad
                            </div>
                            <div className="characteristics-content-cell-text">
                                Камера Hasselblad L1D-20С 
                                известны эргономичным дизайном 
                                и превосходным качеством изображений. 
                            </div>
                            <div className="characteristics-content-cell-title char-cont-title-bottom">
                                Видео HDR
                            </div>
                            <div className="characteristics-content-cell-text">
                                Благодаря поддержке видео 4K HDR 10 бит, Mavic 2 Pro можно подсоединить к совместимому с HLG 4K ТВ и просматривать запись в полном цветовом спектре
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Characteristics