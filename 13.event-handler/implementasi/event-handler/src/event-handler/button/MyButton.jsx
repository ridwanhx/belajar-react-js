// Implementasi Event Handler sebagai Props

function MyButton({ text, onSmash }) {
    return (
        <button className="btn btn-primary" onClick={onSmash}>{ text }</button>
    );
}

export { MyButton };