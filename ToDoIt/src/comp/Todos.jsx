import "./Todos.css"

export function Todos() {

    return (

        <>
            <tr className="todo-item  " data-id="mwvfpf848yo44sgi7fc6bt" draggable="true">
                <td className="">
                    <div className="flex items-center">

                        <span className="" data-original="sfdfZDF">
                            sfdfZDF
                        </span>

                    </div>
                </td>
                <td>No due date</td>
                <td>
                    <div className="badge badge-warning">
                        Pending
                    </div>
                </td>
                <td>
                    <div className="flex gap-1">

                        <button className="btn btn-warning btn-xs edit-btn" data-id="mwvfpf848yo44sgi7fc6bt" title="Edit">
                            <i className="bx bx-edit-alt"></i>
                        </button>
                        <button className="btn btn-success btn-xs toggle-btn" data-id="mwvfpf848yo44sgi7fc6bt" title="Mark Complete">
                            <i className="bx bx-check"></i>
                        </button>
                        <button className="btn btn-error btn-xs delete-btn" data-id="mwvfpf848yo44sgi7fc6bt" title="Delete">
                            <i className="bx bx-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>
            <tr className="todo-item  " data-id="4k57gjzfy8o3kt0phlwjv3" draggable="true">
                <td className="">
                    <div className="flex items-center">

                        <span className="" data-original="fdsfsdf">
                            fdsfsdf
                        </span>

                    </div>
                </td>
                <td>No due date</td>
                <td>
                    <div className="badge badge-warning">
                        Pending
                    </div>
                </td>
                <td>
                    <div className="flex gap-1">

                        <button className="btn btn-warning btn-xs edit-btn" data-id="4k57gjzfy8o3kt0phlwjv3" title="Edit">
                            <i className="bx bx-edit-alt"></i>
                        </button>
                        <button className="btn btn-success btn-xs toggle-btn" data-id="4k57gjzfy8o3kt0phlwjv3" title="Mark Complete">
                            <i className="bx bx-check"></i>
                        </button>
                        <button className="btn btn-error btn-xs delete-btn" data-id="4k57gjzfy8o3kt0phlwjv3" title="Delete">
                            <i className="bx bx-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>
        </>


    );
}