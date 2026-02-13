import "./Todos.css"

export function Todos({ todosArray, handleComplete, handleDelete }) {


    if (todosArray.length >= 1) {
        return (

            <>
                {
                    todosArray.map((theOneTodo, index) => {

                        return (

                            <tr key={index}
                                className={'todo-item ' + (theOneTodo.Status == "Completed" ? "completed" : "null")} data-id="mwvfpf848yo44sgi7fc6bt" draggable="true">
                                <td className="">
                                    <div className="flex items-center">

                                        <span className="" data-original="sfdfZDF">

                                            {theOneTodo.name}

                                        </span>

                                    </div>
                                </td>
                                <td>
                                    {theOneTodo.duedate}
                                </td>
                                <td>
                                    <div className={'badge ' + (theOneTodo.Status == "Completed" ? "badge-success" : "badge-warning")}>
                                        {theOneTodo.Status}
                                    </div>
                                </td>
                                <td>
                                    <div className="flex gap-1">

                                        <button className="btn btn-warning btn-xs edit-btn" data-id="mwvfpf848yo44sgi7fc6bt" title="Edit">
                                            <i className="bx bx-edit-alt"></i>
                                        </button>

                                        <button
                                            onClick={() => handleComplete(index)}
                                            className="btn btn-success btn-xs toggle-btn" data-id="mwvfpf848yo44sgi7fc6bt" title="Mark Complete">
                                            <i className={theOneTodo.Status !== "pending" ? 'bx bx-time' : 'bx bx-check'}></i>
                                        </button>

                                        <button
                                            onClick={() => handleDelete(index)}
                                            className="btn btn-error btn-xs delete-btn" data-id="mwvfpf848yo44sgi7fc6bt" title="Delete">
                                            <i className="bx bx-trash"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>

                        );
                    })
                }
            </>


        );
    } else return (
        <tr>
            <td colSpan="100%" style={{ textAlign: "center", padding: "20px" }}>
                No tasks found. Add a new task to get started!
            </td>
        </tr>
    );


}