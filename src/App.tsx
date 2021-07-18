import React, {useState} from 'react';
import './App.css';
import {Accordion, AccordionCollapsedValue} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UnControlledAccordion} from "./components/Accordion/UnControlledAccordion";
import {UnControlledRating} from "./components/Rating/UnControlledRating";
import {UncontrolledOnOff} from "./components/OnOff/UncontrolledOnOff";
import {Input, InputPropsType} from "./components/Input/Input";
import {v1} from "uuid";

export type PostsType = {
    id: string,
    post: string,
    likeCount: number
}

const App = () => {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(4)
    let [accordionCollapsed, setAccordionCollapsed] = useState<AccordionCollapsedValue>(false)
    let [on, setOn] = useState<boolean>(false)
    let [inputValue, setInputValue]=useState<any>('')
    let [posts, setPosts] = useState<PostsType[]>([])

const addPost = (newPostText: string)=> {
        const newPost:PostsType = {
            id: v1(),
            post: newPostText,
            likeCount: 0
        }
    setPosts([...posts, newPost])
    setInputValue('')
}
    return (
        <div className='App'>
            <PageTitle title={'This is APP'}/>
            <UnControlledRating/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion titleValue={'Menu'} collapsed={accordionCollapsed}
                       setAccordionCollapsed={setAccordionCollapsed}/>
            <UnControlledAccordion titleValue={'Menu'}/>
            <OnOff on={on} setOn={setOn}/>
            <UncontrolledOnOff/>
            <Input addPost={addPost} posts={posts} inputValue={inputValue} setInputValue={setInputValue} />
        </div>
    )
}

type PageTitlePropsType = {
    title: string
}
const PageTitle = (props: PageTitlePropsType) => {
    return (
        <h1>{props.title}</h1>
    )
}
export default App;
