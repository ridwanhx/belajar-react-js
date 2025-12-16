import "../EventPropagation.css";

function Toolbar({ onTap }) {
    return (
        <div className="bg-warning" onClick={onTap}>
            <button className="btn btn-outline-primary" onClick={onTap}>Button 1</button>
            <button className="btn btn-outline-danger" onClick={onTap}>Button 2</button>
        </div>
    );
}

export { Toolbar };