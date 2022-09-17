import React, {useState} from 'react'
import './style.css'

export const Form = () => {

    const [todoValue, setTodoValue]=useState('')

    const handleSubmit=(e)=>{
        e.preventDefault();
        let date = new Date();
        let time = date.getTime();
        let todoObj={
            id: '',
            todo: todoValue,
            completed: false
        }
        setTodoValue('');
    }
  return (
    <form className="forms" onSubmit={handleSubmit}>
        <label>Add Todos</label>
    <div className="input">
        <input type="text" className="control" required value={todoValue} onChange ={(e)=>setTodoValue(e.target.value)}/>
        <button type="submit" className="btn">Submit</button>
    </div>
    </form>
  )
}
