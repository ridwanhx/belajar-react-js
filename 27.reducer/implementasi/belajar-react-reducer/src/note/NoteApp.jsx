import { useImmerReducer } from "use-immer";
import { NoteForm } from "./NoteForm";
import { NoteList } from "./NoteList";

// inisiasi var id
let id = 0;

// inisiasi kerangka notes
const initialNotes = [
  { id: id++, text: "Learn HTML", done: false },
  { id: id++, text: "Learn CSS", done: false },
  { id: id++, text: "Learn JavaScript", done: false },
  { id: id++, text: "Learn React", done: false },
];

function NoteApp() {
  // Menggunakan Immer Reducer
  const [notes, dispatch] = useImmerReducer(notesReducer, initialNotes);

  function handleAddNote(text) {
    dispatch({
      type: "ADD_NOTE",
      text: text,
    });
  }

  function handleChangeNote(note) {
    dispatch({
      type: "CHANGE_NOTE",
      // id: note.id,
      // text: note.text,
      // done: note.done,

      // atau bisa juga dituliskan menggunakan spread operator
      ...note,
    });
  }

  function handleDeleteNote(note) {
    dispatch({
      type: "DELETE_NOTE",
      id: note.id,
    });
  }

  // Implementasi: Menggunakan Immer Reducer
  // inisiasi method reducer
  // karena kita mengimplementasikan immer, maka tentu sekarang kita bisa menggunakan draft sebagai parameter method nya
  // menerima 2 buah parameter yaitu draft, dan action nya
  // dalam hal ini, untuk parameter action nya juga bisa kita inisiasikan sebagai object juga
  function notesReducer(draft, action) {
    if (action.type === "ADD_NOTE") {
      draft.push({
        id: id++,
        text: action.text,
        done: false,
      });
    } else if (action.type === "CHANGE_NOTE") {
      //   inisiasi id yang nilainya sama dengan id yang dikirimkan
      const index = draft.findIndex((note) => note.id === action.id);
      // inisiasi nilai baru untuk text dan done nya
      draft[index].text = action.text;
      draft[index].done = action.done;
    } else if (action.type === "DELETE_NOTE") {
      //   inisiasi id yang nilainya sama dengan id yang dikirimkan
      const index = draft.findIndex((note) => note.id === action.id);
      // hapus 1 element dari array draft pada posisi index yang telah ditentukan
      draft.splice(index, 1);
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
      <NoteList
        notes={notes}
        onChange={handleChangeNote}
        onDelete={handleDeleteNote}
      />
    </div>
  );
}

export { NoteApp };
