import { Todos } from '../comp/Todos.jsx';

import './HomePage.css';

export function HomePage() {

    return (

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
                    <tbody className="todos-list-body">


                        <Todos />


                    </tbody>
                </table>

            </div>

        </main>

    );
}