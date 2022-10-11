import React from "react";
import background2 from '../img/background2.png'
import advantages1 from '../img/advantages1.png'
import advantages2 from '../img/advantages2.png'
import advantages3 from '../img/advantages3.png'
import advantages4 from '../img/advantages4.png'

let Advantages = () => {
    return (
        <>
            <div className="background-div">
                <img className="background" src={background2}/>  
            </div>
            <div className="advantages">
                <div className="advantages-title">
                    Преимущества
                </div>
                <div className="advantages-content">
                    <div className="advantages-content-cells">
                        <div className="advantages-content-cell">
                            <div className="advantages-content-num">
                                1
                            </div>
                            <div className="advantages-img-div">
                                <img src={advantages1} className='advantages-img'/>
                            </div>
                            <div className="advantages-text-content">
                                <div className="advantages-content-title">
                                    Интеллектуальные <br/>
                                    режимы
                                </div>
                                <div className="advantages-content-text">
                                    Технология Hyperlapse в четырёх режимах исполнения.
                                    Улучшенный фото режим HDR
                                    Функция HyperLight для съёмки в условиях слабого освещения
                                    4К съёмка
                                </div>
                            </div>
                            
                        </div>
                        <div className="advantages-content-cell">
                            <div className="advantages-content-num">
                                2
                            </div>
                            <div className="advantages-img-div">
                                <img src={advantages2} className='advantages-img'/>
                            </div>
                            <div className="advantages-text-content">
                                <div className="advantages-content-title">
                                    Active Track 2.0
                                </div>
                                <div className="advantages-content-text">
                                    Mavic 2 унаследовал 6 стандартных режимов интеллектуальной съемки QuickShot:Roket/Dronie/Circle/Helix/Boomerang/Asteroid.
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="advantages-content-cells right">
                        <div className="advantages-content-cell">
                            <div className="advantages-content-num">
                                3
                            </div>
                            <div className="advantages-img-div">
                                <img src={advantages3} className='advantages-img'/>
                            </div>
                            <div className="advantages-text-content">
                                <div className="advantages-content-title">
                                    Панорамная <br/>
                                    съемка
                                </div>
                                <div className="advantages-content-text">
                                    Усовершенствованный режим второго поколения распознаёт и отслеживает объекты ещё точнее, быстрее и умнее.
                                </div>
                            </div>
                            
                        </div>
                        <div className="advantages-content-cell">
                            <div className="advantages-content-num">
                                4
                            </div>
                            <div className="advantages-img-div">
                                <img src={advantages4} className='advantages-img'/>
                            </div>
                            <div className="advantages-text-content">
                                <div className="advantages-content-title">
                                    Крутая <br/>
                                    камера!
                                </div>
                                <div className="advantages-content-text">
                                    Mavic 2 поддерживает 4 режима 
                                    панорамной съёмки: сферическая,
                                    180 градусов,
                                    горизонтальная, вертикальная
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Advantages