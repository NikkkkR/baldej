import React, {useEffect, useState} from 'react'

const Children = (props) => {

    const [delivery, setDelyvery] = useState(false)

    useEffect(() =>{
        console.log("я отрисовался");
    },[])

    return( 
    <div>
        Im Children {props.count}
        {(props.count >= 10) && 'dostavka besplatnaya'}
    </div>)}


export default Children;