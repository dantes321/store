import React, {useEffect} from 'react';
import s from './Boxes.module.scss';
import 'aos/dist/aos.css';

const Boxes = (props) => {

    return props.boxes.map(el => <div ata-aos-duration={1100} data-aos={el.aos} key={el.id} className={s.boxes}>
        <img src={el.img} alt=""/>
        <div className={s.title}>{el.title}</div>
        <div className={s.price}>{el.price} грн</div>
        <a href="#">Выбрать</a>
    </div>)
};

export default Boxes;
