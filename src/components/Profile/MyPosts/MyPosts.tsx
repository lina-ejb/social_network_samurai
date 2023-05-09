import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

type postsDataType = {
    message: string
    _id: number
    likeCounter: number
}
const MyPosts = () => {

    const postsData: Array<postsDataType> = [
        {_id: 1, message: 'What\'s on your mind?', likeCounter: 25},
        {_id: 2, message: "Hey mate! How are things going?", likeCounter: 5},

    ]
    const mappedPosts = postsData.map((el) => (
        <Post
        message={el.message}
        id={el._id}
        likeCounter={el.likeCounter}/>))
    return (
        <div> My post
            <div className={s.posts}>
                {mappedPosts}
                {mappedPosts}
            </div>

        </div>
    )


}

export default MyPosts
