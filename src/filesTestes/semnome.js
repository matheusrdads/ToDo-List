import React, { useState } from 'react';

function SemNome (){

    const [tarefa, setTarefa] = useState(["Fazer compra", "buscar caro"]);
    const [text, setText] = useState("");
    const [mural, setMural] = useState("");

function handleAdd(){
    
    setTarefa([...tarefa, text])
    setText("")
}
function capturarTarefa(event){
    let m = event.target.value
    setText(m)

}
function mudarcor(event, props){
   
}

    return(
        <div>
            <input type="text" onChange={capturarTarefa} value={text} ></input>
            <button type="button" onClick={handleAdd}>adicionar</button>
            <ul>
                {tarefa.map(tarefa => <li>{tarefa}</li>)}
            </ul>
           <div id="cor" onClick={mudarcor} style={{background: "black", width:"100px", height:"50px"}}></div>
            
        </div>
    )
}

export default SemNome;