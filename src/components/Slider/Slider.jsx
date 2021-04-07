import React from 'react';
import s from './Slider.module.scss'
import {Carousel} from "react-bootstrap";

const Slider = () => {

    return (
        <div className={s.slider}>
            <Carousel>
                <Carousel.Item interval={4000}>

                    <img
                        className={s.slide}
                        src="https://img2.goodfon.ru/wallpaper/nbig/7/d7/christmas-winter-new-year-gifts-bow-novyi-god-elka-podarki-b.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <a className={s.addGift} href="#">Обрати подарунки</a>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <img
                        className={s.slide}
                        src="https://zub-zdorov.com.ua/image/willDoHappy/birthday.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <a className={s.addGift} href="#">Обрати подарунки</a>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <img
                        className={s.slide}
                        src="https://walpix.net/image.php?id=11068&width=600&height=338&cropratio=16:9&cropposition=crop&filename=1042636763"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <a className={s.addGift} href="#">Обрати подарунки</a>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </div>
    );
};

export default Slider;
