import { useReducer, useRef } from "react";
import Todo_item from "./Todo_item";
import { items } from './Store/Context';
import { IoIosAddCircle } from "react-icons/io";
const reducerfun = (CurrentState, action) => {
    let newval = CurrentState;
    if (action.type == "NEW_ITEM") {
            if (action.payload.name != "" && action.payload.date != "") {
                newval = [...CurrentState, {
                    name: action.payload.name,
                    date: action.payload.date
                }];
            }
            }else if (action.type == "DEL_ITEM") {
                let name = action.payload.name;
                newval = CurrentState.filter(tasking => tasking.name != name);
            }
              return newval;
}
function Todo() {
    // let [tasking, settasking] = useState([]);
    let [tasking, dispatchtodoitem] = useReducer(reducerfun, []);

    let refname = useRef();
    let reftask = useRef();
    let clicked = (event) => {
    event.preventDefault();
    let date = reftask.current.value;
    const name = refname.current.value;

        const newfunitem = {
            type: "NEW_ITEM",
            payload: {
                name,
                date
            }
        }
        dispatchtodoitem(newfunitem);
        reftask.current.value = "";
        refname.current.value = "";
    }
    let deleteitem = (name) => {
        
        const newfunitem = {
            type: "DEL_ITEM",
            payload: {name}
        }
        dispatchtodoitem(newfunitem);
        // settasking(finalitem)
    }
    return <>
        <items.Provider value={{
            tasking: tasking,
            deleteitem: deleteitem,
        }}>
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