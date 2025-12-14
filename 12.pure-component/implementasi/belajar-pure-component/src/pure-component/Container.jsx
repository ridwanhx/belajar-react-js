import "./PureComponent.css"

function Container({ children }) {
    return (
        <div className="container">
            {children}
        </div>
    );
}

export { Container };