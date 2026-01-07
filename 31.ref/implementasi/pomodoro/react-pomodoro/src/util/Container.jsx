function Container({ children }) {
    return (
        <div className="container">
            <div className="d-flex justify-content-center align-items-center">
            {children}
            </div>
        </div>
    );
}

export { Container };