function AlertButton({ text, message }) {
    // inisiasi handle
    function handleClick() {
        return (
            alert(message)
        );
    }

    return (
        <button className="btn btn-primary" onClick={handleClick}>{ text }</button>
    );
}

export { AlertButton };