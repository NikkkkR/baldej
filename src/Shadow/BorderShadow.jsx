import React from "react";
import './index.css'

const BorderShadow = (props) => {
    return(
        <div className="shadow">{props.children}</div>
    )
}

export default BorderShadow