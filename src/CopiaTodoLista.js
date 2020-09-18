import React, { useState } from 'react';

function CopiaTodoLista (){

    const [text, setText] = useState("");
    const [items, setItems] = useState([]);

    function handleChange(event){
        let t = event.target.value
        setText(t)
    }
    function addItem(event){
        event.preventDefault();
        if(text){
       let item = event.target
       setItems([...items, text]);
       setText("");
        }
    }

    return(
        <div classNome="container">
            <form>
                <h1></h1>
                <input onChange={handleChange} type="text" value={text}></input>
                <button onClick={addItem}>add</button>

                <ul>
                    {items.map(item=> <li>{item}</li>)}
                </ul>

            </form>
        </div>

    )
}

export default CopiaTodoLista;