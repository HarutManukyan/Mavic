import React, {useState} from "react";
import background2 from '../img/background2.png'
import next from '../img/next.png'
import prev from '../img/prev.png'
import slider1 from '../img/slider1.png'
import slider2 from '../img/slider2.png'
import slider3 from '../img/slider3.png'
import slider4 from '../img/slider4.png'

let AboutUs = () => {
    let [index, setIndex] = useState(1)

    let sliderImages = [
        {
            id: 1,
            src: slider1,
        },
        {
            id: 2,
            src: slider2,
        },
        {
            id: 3,
            src: slider4,
        }
    ]

    let nextBtn = () => {
        if(index <= 2){
            setIndex(index + 1)
        } else {
            setIndex(index = 1)
        }
    }
    let prevBtn = () => {
        if(index > 1 ){
            setIndex(index - 1)
            console.log(index)
        } else {
            setIndex(index = 2)
            console.log(index)
        }
    }

    return(
    <>
        <div className="background-div">
              <img className="background" src={background2}/>  
        </div>
        <div className="aboutus">
            
            <div className="aboutus-title">
                Что такое Mavic 2 Pro?
            </div>
            <div className="aboutus-text">
                Дрон Mavic 2 Pro - это инженерное чудо, идеальное для аэросъемки. Дрон обладает всеми лучшими технологиями DJI, он преобразит мир аэросъемки.
                    <br/><br/><br/>
                Mavic 2 Pro оснащен совершенно новой камерой Hasselblad L1D-20c. Камера L1D-20c работает по уникальной технологии Hasselblad Natural Colour Solution (HNCS)5, позволяющей пользователям делать великолепные снимки с воздуха с разрешением в 20 мегапикселей и потрясающими цветами.
            </div>
            <div className="aboutus-desc">
                Лучшая беспилотная <br/>
                технология аэросъемки
            </div>
            <div className="slider">
                {sliderImages.map((img) => (
                    <div key={img.id} className="slider-img-div">
                        <img  src={img.id == index ? img.src : null} className='slider-img'/>
                    </div>
                ))} 
                <div className="arrow-btns">
                    <button onClick={prevBtn} className="prev-btn arrow"/>
                    <button onClick={nextBtn} className="next-btn arrow"/>
                </div>
            
            </div>
        </div>
    </>
        
    )
}

export default AboutUs