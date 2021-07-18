import React, {ChangeEvent, KeyboardEventHandler} from "react";
import {PostsType} from "../../App";


export type InputPropsType = {
    inputValue: any,
    setInputValue: any,
    posts: PostsType[],
    addPost: (newPostText: string) => void
}

export const Input: React.FC<InputPropsType> = ({
                                                    addPost,
                                                    inputValue,
                                                    setInputValue,
                                                    posts
                                                }) => {
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.currentTarget.value)
    }
    const addPostText = () => {
        addPost(inputValue)
    }


    const postEl = posts.map((p) => {
        return (
            <div>
                <span>{p.post} </span>
                <p> like {p.likeCount}</p>
            </div>
        )
    })
    return (
        <div>
            <input type="text" value={inputValue} onChange={onChange}
            />
            <button onClick={addPostText}>add post</button>
            <div>{postEl}</div>
        </div>
    )
}
