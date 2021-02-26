import React from "react";
import s from './Users.module.css'
import * as axios from "axios";
import ava from './../../images/ava.png'


class Users extends React.Component {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {

                this.props.setUsers(response.data.items)
            })

    }
        setCurrentPage = (el) => {
            this.props.currentPage(el)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${el}&count=${this.props.pageSize}`)
                .then(response => {

                    this.props.setUsers(response.data.items)
                })
        }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages = [...pages, i]

        }
        return <div>
            <div>
                {pages.map(el =>{
                    return <span onClick={() => this.setCurrentPage(el)} className={this.props.currentPage === el && s.active}>{el}</span>
                })}
            </div>
            {
                this.props.users.map(user => <div key={user.id}>

                    <div className={s.userContainer}>
                        <div className={s.photo}>
                            <div><img src={user.photos.small != null ? user.photos.small : ava} alt=""/></div>
                            <div>
                                {user.isFollowed
                                    ? <button onClick={() => {
                                        this.props.unfollow(user.id)
                                    }} className='btn btn-dark'>Unfollow</button>
                                    : <button onClick={() => {
                                        this.props.follow(user.id)
                                    }} className='btn btn-dark'>Follow</button>}

                            </div>
                        </div>
                        <div className={s.info}>
                            <div>
                                <div><h3>{user.name}</h3></div>
                                <div>Lorem ipsum dolor sit amet.</div>
                            </div>
                            <div>
                                <div>Ukraine</div>
                                <div>Poltava</div>
                            </div>
                        </div>
                    </div>
                </div>)

            }

        </div>
    }

}

export default Users;