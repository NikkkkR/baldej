import React from "react";
import './index.css'

const Author = (props) => {
    return(
        <p className="name">
            name:{props.name}
        </p>
    )
}

export default Author