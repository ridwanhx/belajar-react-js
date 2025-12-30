import { useImmerReducer } from "use-immer";
import { WishForm } from "./WishForm";
import { WishList } from "./WishList";

// inisiasi kerangka dummy
let id = 0;
const initialState = [
    {id: id++, text: "Learn Golang", done: false},
    {id: id++, text: "Learn Flutter", done: false},
    {id: id++, text: "Learn Java", done: false},
    {id: id++, text: "Learn Python", done: false},
];

function WishApp() {
    // inisiasi immer state
    const [wishs, dispatch] = useImmerReducer(wishsReducer, initialState);

    // handler untuk masing-masing type
    function handleAddWish(text) {
        dispatch({
            type: "ADD_WISH",
            text: text
        });
    }
    function handleChangeWish(wish) {
        dispatch({
            type: "CHANGE_WISH",
            id: wish.id,
            text: wish.text,
            done: wish.done,
        });
    }
    function handleDeleteWish(wish) {
        dispatch({
            type: "DELETE_WISH",
            id: wish.id,
        });
    }

    // inisiasi wishsReducer
    function wishsReducer(draft, action) {
        // inisiasi pengkondisian untuk mengkategorikan tiap tipe aksi yang dikirimkan
        if (action.type === "ADD_WISH") {
            draft.push({
                id: id++,
                text: action.text,
                done: false
            });
        } else if (action.type === "CHANGE_WISH") {
            // cari index wish yang sama dengan index yang dikirimkan oleh aksi
            const index = draft.findIndex((wish) => wish.id === action.id);

            // ganti nilai dengan nilai yang dikirimkan lewat aksi
            draft[index].text = action.text;
            draft[index].done = action.done;
        } else if (action.type === "DELETE_WISH") {
            const index = draft.findIndex((wish) => wish.id === action.id);

            draft.splice(index, 1);
        }
    }

    // return component
    return (
        <>
            <h1>Wishlist App</h1>
            <WishForm onAddWish={handleAddWish} />
            <WishList wishs={wishs} onChangeWish={handleChangeWish} onDeleteWish={handleDeleteWish}/>
        </>
    );
}

export { WishApp };