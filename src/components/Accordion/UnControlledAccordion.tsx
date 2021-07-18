import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string,
}
export const UnControlledAccordion = (props: AccordionPropsType) => {
    const [collapsed, setCollapsed] = useState(false)
    return (
        <div>
            <AccordionTitle
                setCollapsed={setCollapsed}
                title={props.titleValue}
                collapsed={collapsed}
            />
            {!collapsed && <AccordionBody/>}
        </div>
    )
}
type AccordionTitlePropsType = {
    title: string,
    setCollapsed: (collapsed: boolean) => void,
    collapsed: boolean
}
const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <h1 onClick={() => {
            props.setCollapsed(!props.collapsed)
        }
        }>{props.title} </h1>
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

