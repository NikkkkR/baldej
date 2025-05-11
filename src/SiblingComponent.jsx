import React, {useState} from "react";

const SiblingComponent = () => {
    const [text, setText] = useState('sfhdfghyu')

    const setTextHandler = () => {
        setText((value) => value = 'REDEV')
    }

    return(
        <div>
            <p>Текущий текст: {text}</p>
            <button onClick={setTextHandler}>Изменить текст</button>
        </div>
    )
}

export default SiblingComponent