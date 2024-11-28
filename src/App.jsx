import Apname from "./Componants/Apname";
import Addtodo from "./Componants/Addtodo";
import "./App.css";
import Todonewitem from "./Componants/Todonewitem";
import { useState } from "react";
import Length from "./Componants/Length";



function App() {

  
  const [todoitems,setTodoItem]=useState([]);
  
  const handlenewitem=(itemname,date)=>{
    const newitem =[
      ...todoitems,
      {name:itemname,date:date},
    ]
    setTodoItem(newitem);

  }
  const  handledeleted =(itemname) =>{
    const newdeleted= todoitems.filter((items)=> items.name !== itemname)
    setTodoItem(newdeleted);

  }
  
  

  return (
    <>
      <center className="parent">
        <Apname />

        <Addtodo handlenewitem={handlenewitem}></Addtodo>
        <Length todoitems={todoitems}></Length>
        <Todonewitem todoitems={todoitems}
        ondelete={handledeleted}></Todonewitem>
    
        
      </center>
    </>
  );
}
export default App;
