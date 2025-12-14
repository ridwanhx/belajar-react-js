import { Row } from "./Row";

function Table() {
    return (
        <table border={1}>
            <tbody>
                <Row text={"Baris 1"} />
                <Row text={"Baris 2"} />
                <Row text={"Baris 3"} />
            </tbody>
        </table>
    );
}

export { Table };