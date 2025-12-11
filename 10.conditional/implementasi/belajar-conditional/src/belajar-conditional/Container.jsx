import "./TodoList.css";

function Container({ children }) {
    return (
        <div className="container">
            <h1>Hello, World!</h1>
            {children}
            <footer>
                &copy; 2025 | Belajar React Dasar <br />Programmer Zaman Now
            </footer>
        </div>
    );
}

export { Container };