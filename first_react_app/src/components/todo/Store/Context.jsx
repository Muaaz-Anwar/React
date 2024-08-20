import { createContext } from "react";
import { useReducer, useRef } from "react";

export const items = createContext({
    tasking: [],
    deleteitem: () => { }
});



const reducerfun = (CurrentState, action) => {
    let newval = CurrentState;
    if (action.type == "NEW_ITEM") {
        if (action.payload.name != "" && action.payload.date != "") {
            newval = [...CurrentState, {
                name: action.payload.name,
                date: action.payload.date
            }];
        }
    } else if (action.type == "DEL_ITEM") {
        let name = action.payload.name;
        newval = CurrentState.filter(tasking => tasking.name != name);
    }
    return newval;
}


const TodoItemServiceProvider = ({ children }) => {
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
            payload: { name }
        }
        dispatchtodoitem(newfunitem);
        // settasking(finalitem)
    }
    return <items.Provider value={{
        tasking: tasking,
        deleteitem: deleteitem,
    }}>
    {children}
    </items.Provider>

}
export default TodoItemServiceProvider