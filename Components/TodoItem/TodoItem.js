import React,{useState,useRef} from 'react'
import {useDispatch} from 'react-redux'
import {deleteTodo,updateTodo} from '../../Actions/NewIndex';

function TodoItem({task,dept}) {
    const [isUpdate, setisUpdate] = useState(false)
    const dispatch=useDispatch();
    const inputRef=useRef(null)
    

   const editItem=(e)=> {
        e.preventDefault();
        dispatch(updateTodo({ message: inputRef.current.value, id: task.id }));
        setisUpdate(false);
        inputRef.current = null;
       
      }
    const renderForm=()=>{
        return(
            <form onSubmit={editItem}>
                <input ref={inputRef} type='text' defaultValue={task.task}></input>
                <button typr='submit'>Edit todo</button>
            </form>
        )
    }

    const renderItem=()=>{
        return(
            <>
            {task.task}
            <button  onClick={()=>setisUpdate(true)}>Edit</button>
            <button onClick={()=>dispatch(deleteTodo(task.id))}>Delete</button>
            </>
        )
    }
    return (
        <>
        <p></p>
        <div>
        {
            isUpdate ? renderForm():renderItem()
        }
        </div>
        </>
    )
}

export default TodoItem
