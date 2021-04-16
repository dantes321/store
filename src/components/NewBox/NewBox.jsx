import React, {useEffect} from 'react';
import s from './NewBox.module.scss';
import Aos from "aos";
import 'aos/dist/aos.css'


const NewBox = () => {
    useEffect(() =>{
        Aos.init({duration:1000,once:true})
    },[])
    return (
        <div className={s.newBox}>
            <div className={s.boxContainer}>
                <div data-aos = 'fade-right' className={s.title}>Нужен четкий Сюрприз-Бокс?</div>
                <div  data-aos = 'fade-left' className={s.subtitle}>Наш сервис случайных подарков поможет Вам!</div>
                <a href="#">Выбрать бокс</a>
            </div>
        </div>
    );
};

export default NewBox;
