import React from "react";
import s from './Users.module.css'


const Users = (props) => {

    return <div>
        {
            props.users.map(user => <div key={user.id}>
                <div className={s.userContainer}>
                    <div className={s.photo}>
                        <div><img src={user.photo} alt=""/></div>
                        <div>
                            {user.isFollowed
                                ? <button onClick={() => {props.unfollow(user.id)}} className='btn btn-dark'>Unfollow</button>
                                :<button onClick={() => {props.follow(user.id)}} className='btn btn-dark'>Follow</button>}

                        </div>
                    </div>
                    <div className={s.info}>
                        <div>
                            <div><h3>{user.name}</h3></div>
                            <div>{user.status}</div>
                        </div>
                        <div>
                            <div>{user.location.country}</div>
                            <div>{user.location.city}</div>
                        </div>
                    </div>
                </div>
            </div>)

        }

    </div>
}

export default Users;