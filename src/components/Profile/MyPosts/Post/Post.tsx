import React from "react";
import s from './Post.module.css'

type PostPropsType = {
    message: string
    likeCounter: number
    id: number
};

const Post = (props: PostPropsType) => {
    return (
        <div>
            <div className={s.posts}>
                <div className={s.item}>
                    <img src='https://github.com/travis-ci.png'/>
                    {props.message}</div>
                <div>
                    <span>Like</span> {props.likeCounter}
                </div>
            </div>

        </div>
    )


}

export default Post
