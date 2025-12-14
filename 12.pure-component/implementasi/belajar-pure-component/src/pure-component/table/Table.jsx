import { Row } from "./Row";

function Table() {
    return (
        <table border={1}>
            <tbody>
                <Row id={1} text={"Baris 1"} />
                <Row id={2} text={"Baris 2"} />
                <Row id={3} text={"Baris 3"} />
            </tbody>
        </table>
    );
}

export { Table };