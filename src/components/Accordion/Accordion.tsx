import React from "react";

export type AccordionCollapsedValue = boolean
export type AccordionPropsType = {
    /** this is value of title*/
    titleValue: string,
    collapsed: AccordionCollapsedValue,
    setAccordionCollapsed: (collapsed: AccordionCollapsedValue) => void
}
export const Accordion = (props: AccordionPropsType) => {
    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            setAccordionCollapsed={props.setAccordionCollapsed}
                            collapsed={props.collapsed}
            />
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}
type AccordionTitlePropsType = {
    title: string,
    collapsed: AccordionCollapsedValue,
    setAccordionCollapsed: (collapsed: AccordionCollapsedValue) => void
}
const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <h1  onClick={()=>{props.setAccordionCollapsed(!props.collapsed)}}>{props.title}</h1>
    )
}
const AccordionBody = () => {
    return (
        <ul>
            <li>a</li>
            <li>b</li>
            <li>c</li>
        </ul>
    )
}



