import React, {useState} from 'react'

import "./ItemColor.css";
export default function ItemColor(props) {
    const [isActive, setIsActive] = useState(false);

    const toggleColorHandler = (group,id)=>{
        // setIsActive(!isActive);
        // if( props?.onClick){
        //     props?.onClick(group, id);
        // }
    }
    return (
        <div className={`${isActive ? "color-item active tooltip" : "color-item tooltip" }`} onClick={toggleColorHandler.bind(null,props.group, props.id)}>
            <span style={{ display: "inline-block", width: "15px", height: "15px", borderRadius: "50%", backgroundColor: props.color}}></span>
            <span className="tooltiptext">{props.name}</span>
        </div>
    )
}
