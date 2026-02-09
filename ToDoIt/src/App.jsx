

import { MyCridet } from './comp/MyCridet'

import './App.css'

export function App() {

  return (
    <>
      <MyCridet />
      <main>

        <div className="topMain">
          <h1>Todo List</h1>
          <div className="fourBlockes">
            <div className="block1 block">
              <p className="subTitle">Total Tasks</p>
              <div className="nomberAndIcon">
                <p>1</p>
                <i className="bx bx-task text-2xl"></i>
              </div>
            </div>

            <div className="block2 block">
              <p className="subTitle">Total Tasks</p>
              <div className="nomberAndIcon">
                <p>0</p>
                <i className="bx bx-check-circle text-2xl"></i>
              </div>
            </div>

            <div className="block3 block">
              <p className="subTitle">Total Tasks</p>
              <div className="nomberAndIcon">
                <p>1</p>
                <i className="bx bx-time text-2xl"></i>
              </div>
            </div>

            <div className="block4 block">
              <p className="subTitle">Total Tasks</p>
              <div className="nomberAndIcon">
                <p>0%</p>
                <i className="bx bx-pie-chart-alt text-2xl"></i>
              </div>
            </div>
          </div>
          <div className="loodingBar">
          </div>
        </div>

        <div className="bottomMain">
          <div className="interractian">
            <input type="text" className="text" placeholder="add a todo..." />
            <input type="date" className="date" />
            <button>
              <i className="bx bx-plus bx-sm"></i>
            </button>

          </div>


          <div className="sershAndSort">
            <input type="text" placeholder="search tasks..." />
            <button><i className="bx bx-filter mr-2"></i>filter</button>
          </div>
          <div className="towButtons">
            <button className="SORT"><i className="bx bx-sort mr-1"></i>  SORT</button>
            <button className="deleteAll"><i className="bx bx-trash mr-2"></i>  Delete All</button>
          </div>


          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th className="w-2/5">Task</th>
                <th className="w-1/5">Due Date</th>
                <th className="w-1/5">Status</th>
                <th className="w-1/5">Actions</th>
              </tr>
            </thead>
            <tbody className="todos-list-body"><tr className="todo-item  " data-id="mwvfpf848yo44sgi7fc6bt" draggable="true">
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
            </tr><tr className="todo-item  " data-id="4k57gjzfy8o3kt0phlwjv3" draggable="true">
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
              </tr></tbody>
          </table>

        </div>

      </main>
    </>
  )
}
