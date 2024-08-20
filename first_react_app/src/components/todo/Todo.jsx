
import Todo_item from "./Todo_item";
import TodoItemServiceProvider from './Store/Context'
import { IoIosAddCircle } from "react-icons/io";

function Todo() {
  
    return <>
        <TodoItemServiceProvider>
            <div className="container mt-3">
                <h1 style={{ textAlign: 'center', fontWeight: '800', color: 'white', backgroundColor: 'black', padding: '10px 0px' }} className="mb-3">Task 1</h1>
                <form className="row" onSubmit={() => {clicked}}>
                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <input type="text" placeholder="Enter current date" className="w-100" />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3 mt-2 mb-3 mt-lg-0">
                        <input type="date" placeholder="mm/dd/yyyy" className="w-100" />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <button className="btn btn-success w-auto" >Add Task <IoIosAddCircle style={{ fontSize: '22px', marginTop: '-5px' }} className="ms-1" /> </button>
                    </div>
                </form>
                <Todo_item />
            </div>
        </TodoItemServiceProvider>
    </>
}

export default Todo;