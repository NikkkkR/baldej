import React, {useState} from "react";
import ChildComponent from "./ChildComponent";
import SiblingComponent from "./SiblingComponent"

const ParentComponent = () => {
    const [count, setCount] = useState(0)

    const incraseCount = () =>{
        setCount((value)=>++value)
    }

    const decraseCount = () =>{
        setCount((value)=>value > 0 ? --value : 0)
    }

    return(
        <div key={1}>
            <ChildComponent count = {count}/>
            <button onClick={incraseCount}>увеличить</button>
            <button onClick={decraseCount}>уменьшмть</button>
            <SiblingComponent />
        </div>
    )
}

export default ParentComponent
