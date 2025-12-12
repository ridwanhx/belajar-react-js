import "./TodoList.css"

function Container({ children }) {
    return (
        <div className="container">
            <h1>Conditional</h1>
            {children}
            <footer>
                <span className="copyright">&copy; Copyright 2025 <br /> By Muhamad Ridwan</span>
            </footer>
        </div>
    );
}

export { Container };