import "../App.css";
import { useState } from "react";
import { Label } from "../utils/Label";

function TodoForm({ onAddTodo }) {
    // inisiasi state
    const [text, setText] = useState("");

    // handle ketika terjadi perubahan pada input
    function handleOnChange(e) {
        setText(e.target.value);
    }

    // handle ketika tombol di klik
    function handleOnClick() {
        setText("");    // reset State
        onAddTodo(text);    // kirim nilai text ke props
    }

    return (
        <>
            <Label labelFor={"todo"} text={"Your Todo"} />
            <input type="text" id="todo" className="form-control" onChange={handleOnChange} value={text} />
            <button className="btn btn-outline-primary" onClick={handleOnClick}>+ Add Todo</button>
        </>
    );
}

export { TodoForm };