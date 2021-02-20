import React ,{useState}from 'react'
import {useDispatch}from 'react-redux'
import {addTodo} from '../../Actions/NewIndex'
import cuid from 'cuid'

function AddTodo() {
    const [name,setName] =useState('');

    const dispatch=useDispatch();

    const handleInputChange=(e)=>{
        setName(e.target.value);
    }

    const handleFormSubmit=e=>{
        e.preventDefault();
        setName(dispatch(addTodo({task:name,id:cuid()})));
            e.target.userInput.value="";
    }
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <div>
                <label>Add Task:</label>
                <input type='text' name='userInput' placeholder='Task Name'onChange={e=>handleInputChange(e)}></input>
                </div>
        
                <div>
                <button type='submit'>Add</button>
                </div>
            </form>
        </div>
    )
}

export default AddTodo






