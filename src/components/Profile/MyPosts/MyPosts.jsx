import React from 'react';
import s from './MyPosts.module.css'

const MyPosts = (props) => {

    let updateNewPostText = (text) =>{
        let newText = text.target.value;
        props.updateNewPostText(newText)
    }

    let addNewPost = () =>{
        props.addNewPost()
    }

   

    return <div>

        <div className={s.posts}>
            <div className={s.postsContainer}>
                <h2>My Posts</h2>
                <textarea placeholder='Enter your text..' value={props.newPostMessage} onChange={updateNewPostText}> </textarea>
                <button onClick={addNewPost} className='btn btn-success'>Add post</button>

            </div>
            <div className={s.postsItems}>
                {
                    props.posts.map(el => <div key={el.id} className={s.postsItem}>
                        <img src={el.img} alt=""/>
                        <label >{el.text}</label>
                    </div>)
                }
            </div>
        </div>

    </div>
};

export default MyPosts;
