import { useState } from "react"
import '../css/todoList.css'


const TodoList =() =>{

    let [ addedTasks, setAddedTasks ] = useState( [] );
    let [ currentTask, setCurrentTask ] = useState('');

    const TaskList = ( { taskName } ) =>{
        return <div className='task-list'>
            <span>{ taskName}</span>
            <button className= 'btn btn-primary' onClick={taskRemoveHandler} name={taskName}> Remove </button>
        </div>
    };
    

    const taskRemoveHandler = ( e )=>{
        e.preventDefault();
        setAddedTasks( existingTasks  => existingTasks.filter( task => task === e.target.name ?false: true ) );
    };

    const taskAddHandler = ( e ) =>{
        e.preventDefault();
        setAddedTasks( existingTasks  => [ ...existingTasks,  currentTask] );
        setCurrentTask( '');
    }
    return(
        <form className= 'to-do-list-container'>
                <div className='to-do-list-header'>
                        ToDo List
                </div>
                <div className = 'to-do-list-input'>
                    <input className = 'input-widget' placeholder='Enter Task to Do' name={currentTask} value={currentTask} onChange={ ( e )=> setCurrentTask( e.target.value)} />
                    <button className = 'btn btn-primary' onClick={taskAddHandler}> Add Task </button>
                </div>
                <div className='to-do-list-body'>
                {
                    addedTasks.map( ( taskName, index ) => {
                        return <TaskList key= {index } taskName={taskName}/>
                    })
                }
                </div>
        </form>
    )

}

export default TodoList;