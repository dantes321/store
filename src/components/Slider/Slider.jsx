import React from 'react';
import s from './Slider.module.scss'
import {Carousel} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const Slider = () => {

    return (
        <div className={s.slider}>
            <Carousel>
                <Carousel.Item interval={4000}>

                    <img
                        className={s.slide}
                        src="https://www.restoclub.ru/uploads/article_thumbnail_big/f/6/9/7/f697a9c2a94c3567fc5fc05702c02ff2.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className={s.body}>
                        <div className={s.title}>Корпоративні подарунки</div>
                        <NavLink className={s.addGift} to="/createbox">Обрати подарунки</NavLink>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <img
                        className={s.slide}
                        src="https://biz.liga.net/images/general/2020/11/10/thumbnail-tw-20201110104735-8369.jpg?v=1605001781"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className={s.body}>
                            <div className={s.title}>Карантин</div>
                            <div className={s.subtitle}>Підбадьорь близьких</div>
                            <NavLink className={s.addGift} to="/createbox">Обрати подарунки</NavLink>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <img
                        className={s.slide}
                        src="https://walpix.net/image.php?id=11068&width=600&height=338&cropratio=16:9&cropposition=crop&filename=1042636763"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className={s.body}>
                            <div className={s.title}>Конструктор Подарунків</div>
                            <div className={s.subtitle}>Створи свій бокс з наявних інгредієнтів</div>
                            <NavLink className={s.addGift} to="/createbox">Створити свій бокс</NavLink>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <img
                        className={s.slide}
                        src="https://rusradio.lt/wp-content/uploads/2020/12/960x540.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className={s.body}>
                            <div className={s.title}>Супергеройські бокси</div>
                            <NavLink className={s.addGift} to="#">Обрати супергероя</NavLink>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </div>
    );
};

export default Slider;
