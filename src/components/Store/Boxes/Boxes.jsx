import React, {useEffect} from 'react';
import s from './Boxes.module.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Boxes = (props) => {

    useEffect(() =>{
        Aos.init({duration:1000,once:true})
    },[])

    return props.boxes.map(el => <div data-aos='fade-up' key={el.id} className={s.box}>
        <img src={el.img} alt=""/>
        <div className={s.title}>{el.title}</div>
        <div className={s.price}>{el.price} грн</div>
        <a href="#">Выбрать</a>
    </div>)
};

export default Boxes;
