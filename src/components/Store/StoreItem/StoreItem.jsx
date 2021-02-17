import React, {useState} from 'react';
import s from './StoreItem.module.css'
import {Card,Button} from 'react-bootstrap'
import {rerenderEntireTree} from "../../../index";

const StoreItem = (props) => {


    let addToCart = () => {
        props.dispatch({type:'ADD-TO-CART'})

    }

    return (


                <div className={s.item}>
                    <Card style={{  width: '18rem' ,margin: '0 auto' }}>
                        <Card.Img variant="top" src={props.src} />
                        <Card.Body>
                            <Card.Title>{props.name}</Card.Title>
                            <Card.Text>
                                {props.price} $
                            </Card.Text>
                            <Button onClick={addToCart}  variant="primary">Add to cart</Button>
                        </Card.Body>
                    </Card>

                </div>

    )
}

export default StoreItem