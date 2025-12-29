import "../App.css";
import { useState } from "react";

function Todo({ todo, onChange, onDelete }) {
    // inisiasi state
    const [isEditing, setIsEditing] = useState(false);
    // inisiasi var u/ menyimpan component
    let component;

    function handleChangeTodo(e) {
        // inisiasi newTodo
        const newTodo = { ...todo, text: e.target.value };

        // kirim newTodo ke onChange
        onChange(newTodo);
    }

    // lakukan pengkondisian untuk menentukan apakah pengguna sedang mengedit todo atau tidak
    // jika isEditing bernilai true, maka
    if (isEditing) {
        component = (
            <>
                <input type="text" className="form-control" onChange={handleChangeTodo} value={todo.text} />
                <button className="btn btn-outline-primary" onClick={() => setIsEditing(false)}>Save</button>
            </>
        );
    } else {
        component = (
            <>
                {todo.text}
                <button className="btn btn-outline-primary" onClick={() => setIsEditing(true)}>Edit</button>
            </>
        );
    }

    // inisiasi method untuk handle ketika terjadi perubahan pada checkbox
    function handleChangeDone(e) {
        // inisiasi perubahan done terbaru
        const newDone = { ...todo, done: e.target.checked }
        
        // kirim sebagai nilai untuk onChange
        onChange(newDone);
    }

    // kembalikan komponen
    return (
        <>
            <label>
                <input type="checkbox" onChange={handleChangeDone} value={todo.done} />

                {component}

                <button className="btn" onClick={() => onDelete(todo)}>Delete</button>
            </label>
        </>
    );
}

export { Todo };