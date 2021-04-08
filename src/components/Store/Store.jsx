import React from 'react';
import s from './Store.module.scss';
import StoreItemsContainer from "./StoreItems/StoreItemsContainer";

const Store = (props) => {
    return (
        <div className={s.store}>
            <div className={s.description}>
                <div className={s.subtitle}>[ що ми створюємо ]</div>
                <div className={s.title}>Мабуть, найкращі подарункові бокси</div>
                <div className={s.subtitle}>[ до 500 грн ]</div>
            </div>
            <StoreItemsContainer/>
        </div>
    );
};

export default Store;
