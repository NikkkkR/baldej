import React, {useState} from "react";
import Poster from "./Poster/Index";
import './index.css'
import BorderShadow from "./Shadow/BorderShadow";
import Children from "./Children";

// const MOVIES = [
//     {
//         id: 1,
//         name: 'Про мужика',
//         description: 'Про какого-то мужика, который что-то сделал',
//         img: 'https://festagent.com/system/tilda/tild6137-6632-4661-a361-613336646361__e4fac156b38cab487ec4.jpg'
//     },
//     {
//         id: 2,
//         name: 'Про мужика с медведем',
//         description: 'Медведь читает газету',
//         author: { name: 'John' },
//         img: 'https://www.film.ru/sites/default/files/images/crobn_013h_g_spa-ar_70x100_002_nuevo.jpg' 
//     },
//     {
//         id: 3,
//         name: 'Про мужика-акулу',
//         img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLMW66ta222_snvsmRO9GlNgMz2oi9DtDYnT2HpvDFeSrvLANwYu1xjzeS-OjV-MKu3Pk&usqp=CAU'
//     },
// ];

// const App = () =>{
//     return (
//         <div className="mainWrapp">
//             {
//                 MOVIES.map(movie => {
//                     return (
//                         <BorderShadow key={movie.id}>
//                             <Poster 
//                             name = {movie.name}
//                             description = {movie.description}
//                             author = {movie.author}
//                             img = {movie.img}
//                             />
//                         </BorderShadow>
                            
//                     )
//                 })
//             }
//         </div>
//     )
// }

// export default App;


const App = () =>{
    // const [isDark, setDark] = useState(true)

    // const changeTem = () => isDark ? setDark(false) : setDark(true)

    // return(
    //     <div className={isDark ? 'dark' : 'light'}>
    //         test
    //         <button onClick={changeTem}> поменять тему</button>
    //     </div>
    // )

//     const [data, changeData] = useState({name:'', password:''})

//     const changeName = (event) =>{
//         changeData ((currentData)=>({
//             ...currentData,
//             name: event.target.value
//         }))}
    

//     const changePassword = (event) =>{
//         changeData ((currentData) => ({
//             ...currentData, 
//             password: event.target.value
//         }))}
    

//     return(
//         <div>
//             <input type="text" onChange={changeName} />
//             <input type="password" onChange={changePassword}/>

//             <p>ваше имя : {data.name}</p>
//             <p>ваш пороль : {data.password}</p>
//         </div>
//     )
// }

    const [state, setState] = useState(false);
    const [count, setCount] = useState(0)

    const onClickHandler = () => {
        setState((data) => !data);
    }

    const countHandler = () => {
        setCount((value) => ++value)
    }

    return(
        <div key={1}>
            <button onClick={countHandler}>+</button>
            <button onClick={onClickHandler}>switch</button>
            {state && <Children count ={count}/>}
        </div>
    )

}

export default App