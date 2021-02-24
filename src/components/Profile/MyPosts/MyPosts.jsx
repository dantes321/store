import React from "react";
import s from './MyPosts.module.css'
import MyPost from "./MyPost/MyPost";


const MyPosts = (props) =>{

    let renderPostItems = props.profilePage.posts.map(el => <MyPost key ={el.id} text = {el.text}/>)

    let addPost =() =>{
        props.addPost()
    }
    let updateNewPostText = (text) =>{
        let newText = text.target.value
        props.updateNewPostText(newText)
    }

    return(
        <div className={s.myPosts}>
            <h3>My Posts</h3>
            <div>
                <div><textarea
                    onChange={updateNewPostText}
                    value={props.profilePage.newPostItem}
                    placeholder='Enter something..'> </textarea></div>
                <button onClick={addPost} className='btn btn-success'>Add post</button>
                {renderPostItems}
            </div>

        </div>
    )
}

export default MyPosts;