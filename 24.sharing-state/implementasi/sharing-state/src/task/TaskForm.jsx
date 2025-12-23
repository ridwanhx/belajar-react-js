import "../App.css";
import { Label } from "../utils/Label";

function TaskForm() {
    return (
        <>
            <form>
                <Label labelFor={"task"} text={"Your Task"}/>
                <input type="text" id="task" className="form-control" />
                <button className="btn btn-outline-primary">+ Add Task</button>
            </form>
        </>
    );
}

export { TaskForm };