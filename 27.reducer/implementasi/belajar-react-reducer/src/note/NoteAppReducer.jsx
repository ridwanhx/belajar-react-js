import { NoteForm } from "./NoteForm";
import { NoteList } from "./NoteList";
import { useReducer } from "react";

// inisiasi var id
let id = 0;

// inisiasi kerangka notes
const initialNotes = [
  { id: id++, text: "Learn HTML", done: false },
  { id: id++, text: "Learn CSS", done: false },
  { id: id++, text: "Learn JavaScript", done: false },
  { id: id++, text: "Learn React", done: false },
];

function NoteAppReducer() {
  // Menggunakan Reducer
  // dispatch adalah merupakan function yang nentinya akan kita gunakan untuk mengirimkan object action nya
    const [notes, dispatch] = useReducer(notesReducer, initialNotes);
    
    // inisiasi method handle add note versi yang telah mengimplementasikan reducer
    function handleAddNote(text) {
        dispatch({
            type: 'ADD_NOTE',
            text: text
        });
    }
    
    // inisiasi method handle change note versi yang telah mengimplementasikan reducer
    function handleChangeNote(note) {
        dispatch({
            type: 'CHANGE_NOTE',
            // id: note.id,
            // text: note.text,
            // done: note.done,
            
            // atau bisa juga dituliskan menggunakan spread operator
            ...note
        });
    }
    
    // inisiasi method handle change note versi yang telah mengimplementasikan reducer
    function handleDeleteNote(note) {
        dispatch({
            type: 'DELETE_NOTE',
            id: note.id,
        });
    }

  // Implementasi: Menggunakan Reducer
  // inisiasi method reducer
  // menerima 2 buah parameter yaitu notes, dan action nya
  // dalam hal ini, untuk parameter action nya juga bisa kita inisiasikan sebagai object juga
  function notesReducer(notes, action) {
    // tentukan percabangan kondisi menggunakan switch condition, berdasarkan dari tipe action yang dikirimkan
    switch (action.type) {
      // 1. tipe action ADD_NOTE
      case "ADD_NOTE":
        // inisiasi array baru, yang isinya merupakan array lama (...notes) ditambahkan dengan data object yang baru dan dikembalikan sebagai nilai kembalian
        return [
          ...notes,
          {
            id: id++,
            text: action.text,
            done: false,
          },
        ];

      // 2. tipe action CHANGE_NOTE
      case "CHANGE_NOTE":
        // lakukan mapping pada notes, yang kemudian jika id nya sama dengan id yang dikirimkan ? maka ganti dengan data baru (text, done) nya : jika tidak maka kembalikan note yang sama
        return notes.map((note) =>
          note.id == action.id
            ? { ...note, text: action.text, done: action.done }
            : note
        );

      // 3. tipe action DELETE_NOTE
      case "DELETE_NOTE":
        // lakukan filter pada notes, yang kemudian cari didalam notes tersebut yang nilai id nya tidak sama dengan id yang dikirimkan
        // artinya / dengan kata lain, note yang punya id sama dengan action.id akan dibuang dari hasil array
        return notes.filter((note) => note.id !== action.id);

      // default action
      default:
        // kembalikan notes nya saja
        return notes;
    }
  }

  return (
    <div>
      <h1>Note App</h1>
      {/* <NoteForm onAddNote={handleAddNote} />
      <NoteList
        notes={notes}
        onChange={handleChangeNote}
        onDelete={handleDeleteNote}
      /> */}

      {/* Menggunakan Reducer */}
      <NoteForm onAddNote={handleAddNote} />
      <NoteList notes={notes} onChange={handleChangeNote} onDelete={handleDeleteNote} />
    </div>
  );
}

export { NoteAppReducer };
