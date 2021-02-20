import React from 'react'
import {useSelector} from 'react-redux';
import TodoItem from '../TodoItem/TodoItem';


function TodoList() {
    const taskObj=useSelector(state=>state.todos.data);
    const taskItems=taskObj.map((task)=>{
        return <TodoItem task={task} key={task.id}/>
    })
    console.log(taskItems)
    return (
        <div>
            <h2>Todos List...</h2>
            {taskItems}
        </div>
    )
}

export default TodoList
