import { useState } from 'react';

import { Todos } from '../comp/Todos.jsx';

import './HomePage.css';

export function HomePage() {

    let [todosArray, setTodosArray] = useState(localStorage.getItem('todosArray') ? JSON.parse(localStorage.getItem('todosArray')) : [
        {
            name: 'Text1',
            duedate: "2026/02/04",
            Status: "pending",

        }, {
            name: 'Text2',
            duedate: "2026/02/04",
            Status: "Completed",
        }, {
            name: 'Text3',
            duedate: "2026/02/04",
            Status: "pending",
        },
    ]);

    function setToLocal() {
        localStorage.setItem('todosArray', JSON.stringify(todosArray));
        console.log('setToLocal()');
        console.log(JSON.stringify(todosArray));
    }

    function handleComplete(index) {
        if (todosArray[index].Status === "Completed") {
            todosArray[index].Status = "pending";
        } else {
            todosArray[index].Status = "Completed";
        }
        setTodosArray([
            ...todosArray
        ])
        setToLocal()
    }

    function handleDelete(index) {
        todosArray.splice(index, 1);
        setTodosArray([
            ...todosArray
        ])
        setToLocal()
    }


    let textInput = null;
    let textDate = null;

    function addToDo() {
        if (textInput && textDate) {
            todosArray = [
                ...todosArray,
                {
                    name: textInput,
                    duedate: textDate,
                    Status: "pending",
                }
            ]
            setTodosArray([
                ...todosArray
            ])
            setToLocal()
        }
    }

    function deleteAll() {
        todosArray = []

        setTodosArray([
            ...todosArray
        ])

        setToLocal()
    }

    function thePercentegeIsLongEnoph() {
        return (Math.round(((todosArray.filter(task => task.Status === 'Completed').length) / ((todosArray.filter(task => task.Status !== 'Completed').length) + (todosArray.filter(task => task.Status === 'Completed').length))) * 100) ? Math.round(((todosArray.filter(task => task.Status === 'Completed').length) / ((todosArray.filter(task => task.Status !== 'Completed').length) + (todosArray.filter(task => task.Status === 'Completed').length))) * 100) : 0);
    }


    return (

        <main>

            <div className="topMain">
                <h1>Todo List</h1>
                <div className="fourBlockes">
                    <div className="block1 block">
                        <p className="subTitle">Total Tasks</p>
                        <div className="nomberAndIcon">
                            <p>
                                {
                                    todosArray.length
                                }
                            </p>
                            <i className="bx bx-task text-2xl"></i>
                        </div>
                    </div>

                    <div className="block2 block">
                        <p className="subTitle">Completed Tasks</p>
                        <div className="nomberAndIcon">
                            <p>

                                {todosArray.filter(task => task.Status === 'Completed').length}

                            </p>
                            <i className="bx bx-check-circle text-2xl"></i>
                        </div>
                    </div>

                    <div className="block3 block">
                        <p className="subTitle">pending Tasks</p>
                        <div className="nomberAndIcon">
                            <p>

                                {todosArray.filter(task => task.Status === 'pending').length}

                            </p>
                            <i className="bx bx-time text-2xl"></i>
                        </div>
                    </div>

                    <div className="block4 block">
                        <p className="subTitle">Tasks percentage</p>
                        <div className="nomberAndIcon">
                            <p>
                                %
                                {

                                    thePercentegeIsLongEnoph()

                                }

                            </p>
                            <i className="bx bx-pie-chart-alt text-2xl"></i>
                        </div>
                    </div>
                </div>
                <div
                    className="loodingBar"
                    style={{
                        background: `linear-gradient(to right, #22c55e ${thePercentegeIsLongEnoph()}%, #e5e7eb ${thePercentegeIsLongEnoph()}%)`
                    }}
                ></div>

            </div>

            <div className="bottomMain">
                <div className="interractian">
                    <input type="text" className="text" placeholder="add a todo..."
                        onChange={(Event) => {
                            textInput = Event.target.value;
                        }} />

                    <input type="date" className="date"
                        onChange={(Event) => {
                            textDate = Event.target.value;
                        }}
                    />
                    <button onClick={addToDo}>
                        <i className="bx bx-plus bx-sm"></i>
                    </button>

                </div>


                <div className="sershAndSort">
                    <input type="text" placeholder="search tasks..." />
                    <button><i className="bx bx-filter mr-2"></i>filter</button>
                </div>
                <div className="towButtons">
                    <button className="SORT"><i className="bx bx-sort mr-1"></i>  SORT</button>

                    {
                        todosArray.length >= 1 ? <button className="deleteAll"
                            onClick={deleteAll}
                        ><i className="bx bx-trash mr-2"></i>  Delete All</button> : null
                    }
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


                        <Todos todosArray={todosArray} handleComplete={handleComplete} handleDelete={handleDelete} />


                    </tbody>
                </table>

            </div>

        </main>

    );
}