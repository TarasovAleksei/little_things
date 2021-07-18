import React from "react";
export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5
export type RatingPropsType = {
    value: RatingValueType,
    onClick:(value:RatingValueType)=>void
}
export const Rating = (props: RatingPropsType) => {
    return (
        <div>
            <Star onClick={props.onClick} value={1} selected={props.value > 0}/>
            <Star onClick={props.onClick} value={2} selected={props.value > 1}/>
            <Star onClick={props.onClick} value={3} selected={props.value > 2}/>
            <Star onClick={props.onClick} value={4} selected={props.value > 3}/>
            <Star onClick={props.onClick} value={5} selected={props.value > 4}/>
        </div>
    )
}
type StarPropsType = {
    selected: boolean,
    onClick: (value:RatingValueType)=>void,
    value: RatingValueType

}
const Star = (props: StarPropsType) => {
    return <span onClick={()=>{props.onClick(props.value)}}> {props.selected ? <b> star </b> : ' star '}</span>
}
