import { useContext } from 'react';
import styles from '../../assets/Todo/todo.module.css';
import { FcFullTrash  } from "react-icons/fc";
import { items } from './Store/Context';

function Todo_item() {
    let {tasking, deleteitem} = useContext(items);
    let alert = () => { return <div className="alert alert-warning" role="alert"> No task available right now - check it out later! </div> }
    return <>
        {tasking == "" ? alert() : ""}
        {tasking.map(item => <div className={`${styles['border']} row mt-5`} key={item.name}>
            <div className="col-sm-12 col-md-6 col-lg-4">
                <span style={{ display: 'flex' }}><b>Task: </b>  <p style={{ marginLeft: '20px' }}>{item.name}</p> </span>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 mt-2 mb-3 mt-lg-0">
                <span style={{ display: 'flex' }}><b>Date: </b>  <p style={{ marginLeft: '20px' }}>{item.date}</p> </span>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
                <button className="btn btn-danger w-auto" style={{ marginTop: '-8px' }} onClick={() =>deleteitem(item.name)} > Delete task <FcFullTrash  style={{ fontSize: '22px', marginTop: '-5px' }} className="ms-1" /></button>
            </div>
        </div>
        )}
    </>
}

export default Todo_item;