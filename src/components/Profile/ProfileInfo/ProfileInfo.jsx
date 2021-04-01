import React from 'react';
import s from "./ProfileInfo.module.css";
import {Carousel, CarouselItem} from "react-bootstrap";

const ProfileInfo = () => {
    return (
        <div className={s.profileInfo}>
            <Carousel interval = '999999'>
                <CarouselItem>
                    <div className={s.profileInfoContainer}>
                        <div className={s.profilePhoto}>
                            <img src="https://pbs.twimg.com/profile_images/1205126924185550848/lNwsk7VE_400x400.jpg"
                                 alt=""/>
                        </div>
                        <div className={s.profileDescription}>
                            <div className={s.name}>Alex Petroff, 23 y.o.</div>
                            <div>Ukraine, Poltava</div>
                            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam explicabo iste minus
                                nostrum
                                repellat sunt, ullam! Accusantium aspernatur atque aut deserunt dolore ducimus est illo
                                ipsum
                                libero nulla provident tempore ut, vel. Consequatur cumque facilis harum minus nam
                                similique
                                suscipit vitae. Aspernatur assumenda aut esse modi nesciunt reiciendis, velit
                                voluptates.
                            </div>
                        </div>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div className={s.profileInfoContainer}>
                    <div className={s.buttons}>
                        <button className='btn btn-dark'>Photos</button>
                        <button className='btn btn-dark'>Friends</button>
                        <button className='btn btn-dark'>Music</button>
                    </div>
                    </div>
                </CarouselItem>
            </Carousel>

        </div>

    );
};

export default ProfileInfo;
