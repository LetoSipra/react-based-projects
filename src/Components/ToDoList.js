import React, { useState, useEffect } from "react";

function App() {
    const getLocalData = () => {
    const savedItem = localStorage.getItem("note");
    const parsedItem = JSON.parse(savedItem);
    return parsedItem || note;
    }

    const [note, setNote] = useState(getLocalData)
    const [input, setInput] = useState("")

    const saveInput = (e) => {
        setInput(e.target.value)
    }

    const addNewItem = () => {
        //const getId = {id: new Date().getTime().toString()}
        //const copyNote = [...note, input]
        //copyNote.push(input);
        //setNote(copyNote);
        //setInput("");
        //const person = { id: new Date().getTime().toString(), input };
        const newPerson = { input, id: new Date().getTime().toString() };
        setNote([...note, newPerson]);
        setInput("");
    }
    const removeItem = (id) => {
        let newList = note.filter((x) => x !== id);
        setNote(newList)
    }
    useEffect(() => {
    localStorage.setItem('note', JSON.stringify(note));
    }, [note]);
    return (
        <>
        <input value={input} type="text" onChange={saveInput} />
        <button onClick={addNewItem}>Add</button>
        <button onClick={() => {setNote([])}}>Clear</button>
        <ol>
            {note.map((subItems) => {
                return <>
                <li> {subItems}</li>
                <button onClick={() => {removeItem(subItems)}}>Remove</button>
                </>
            })}
        </ol>
        </>
    )
}
export default App;