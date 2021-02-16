import React from 'react';
import s from './StoreItem.module.css'
import {Card,Button} from 'react-bootstrap'

const StoreItem = (props) => {
    return (


                <div className={s.item}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={props.src} />
                        <Card.Body>
                            <Card.Title>{props.name}</Card.Title>
                            <Card.Text>
                                {props.price} $
                            </Card.Text>
                            <Button  variant="primary">Add to cart</Button>
                        </Card.Body>
                    </Card>

                </div>

    )
}

export default StoreItem