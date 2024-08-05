import { useState, useRef } from "react";
import Todo_item from "./Todo_item";
import {items} from './Store/Context';
import { IoIosAddCircle } from "react-icons/io";
function Todo() {
    let [tasking, settasking] = useState([]);
    let refname = useRef();
    let reftask = useRef();
    let clicked = (event) => {

        let tasked = reftask.current.value;
        const named = refname.current.value;
        event.preventDefault();
        if (named != "" && tasked != "") {
            let newarray = [...tasking, {
                name: named,
                date: tasked
            }];
            settasking(newarray);
            reftask.current.value = "";
            refname.current.value = "";
        }
    }
    let deleteitem = (name) => {
        const finalitem = tasking.filter(tasking => tasking.name != name);
        settasking(finalitem)
    }
    return <>
        <items.Provider value={{
            tasking: tasking,
            deleteitem: deleteitem,}}>
            <div className="container mt-3">
                <h1 style={{ textAlign: 'center', fontWeight: '800', color: 'white', backgroundColor: 'black', padding: '10px 0px' }} className="mb-3">Task 1</h1>
                <form className="row" onSubmit={clicked}>
                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <input type="text" placeholder="Enter current date" ref={refname} className="w-100" />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3 mt-2 mb-3 mt-lg-0">
                        <input type="date" placeholder="mm/dd/yyyy" ref={reftask} className="w-100" />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <button className="btn btn-success w-auto" >Add Task <IoIosAddCircle style={{ fontSize: '22px', marginTop: '-5px' }} className="ms-1" /> </button>
                    </div>
                </form>
                <Todo_item />
            </div>
        </items.Provider>
    </>
}

export default Todo;