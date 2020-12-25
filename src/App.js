import React from 'react';
import {useState} from "react";
import "./App.css";


function App() {
  const [todos, setTodos] = React.useState([
    
    {
      text: "Learn about React",
      isCompleted: false
    }, 
    {
      text: "Meet friend for lunch",
      isCompleted: false
    },
    {
      text: "Build really cool todo app",
      isCompleted: false
    }
  
  ]);


  const completeTodo = (index)=>{ 
     const newTodo = [...todos]
     newTodo[index].isCompleted = true;

    setTodos(newTodo)

  }

  const removeTodo = (index)=>{
    const newTodo = [...todos] 
    newTodo.splice(index,1)
    setTodos(newTodo)
  }

 
 function AddTodo(){
    const [value ,setValue]= useState("");
    const handleSubmit= (event)=>{
    event.preventDefault() 
    const newTodo =[...todos,{
      text: value,
      isCompleted: false
     }]
     setTodos(newTodo)
    
    }
   return(
     <div>
     <form onSubmit={handleSubmit}>
     <input className="todo-list" onChange={(e)=>{setValue(e.target.value)}}type="text" name="todo" />
  
  <button className="todo-list" type="submit" value="Submit">Add</button>
</form>
     </div>

   )
 }
  

  function Todo( props ) {
    console.log("props",props)
  return (
    
    <div className="todo" style={{textDecoration:props.todo.isCompleted?"line-through":""}}> 
        {props.todo.text}
      <div> 
      <button 
      onClick={()=>props.completeTodo(props.index)}>completed</button>
      <button onClick={()=>props.removeTodo(props.index)}>x</button></div> 

    </div> 
  ); 
};
  return (
    
   <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
          
        ))}
        <AddTodo/> 
      </div>
      
    </div>
  );
}

export default App;


