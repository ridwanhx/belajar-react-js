import { useState } from "react";

function Wish({ wish, onChangeWish, onDeleteWish }) {
    // inisiasi state
    const [isEditing, setIsEditing] = useState(false);

    // inisiasi media untuk wadah component
    let component;

    // inisiasi method handle Change Wish
    function handleOnChangeWish(e) {
        // inisiasi wish baru
        const newWish = { ...wish, text: e.target.value };

        // perbarui wish
        onChangeWish(newWish);
    }

    // beri kondisi jika berdasarkan kondisi isEditing saat ini
    if (isEditing) {
        component = (
            <>
                <input type="text" className="form-control" onChange={handleOnChangeWish} value={wish.text} />
                {/* Ketika isEditing true, jangan tampilkan tombol edit nya */}
                <button className="btn btn-outline-primary" onClick={() => setIsEditing(false)}>Save</button>
            </>
        );
    } else {
        component = (
            <>
                {wish.text}
                <button className="btn btn-outline-primary" onClick={() => setIsEditing(true)}>Edit</button>
            </>
        );
    }

    // inisiasi method handle Done
    function handleChangeDone(e) {
        // inisiasi nilai done terbaru
        const newDone = { ...wish, done: e.target.checked };

        onChangeWish(newDone);
    }

    return (
        <>
            <label>
                <input type="checkbox" onChange={handleChangeDone} checked={wish.done} />

                {component}

                <button className="btn" onClick={() => onDeleteWish(wish)}>Delete</button>
            </label>
        </>
    );
}

export { Wish };