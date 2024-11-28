
import Todoitem from "./Todoitem";

function Todonewitem ({todoitems,ondelete}) {
  return (
    
    <div className="itemscontainer" key={ondelete}>
      { todoitems.map((item)=> <Todoitem todoname={item.name} 
      tododate={item.date}
      ondelete={ondelete}></Todoitem>)}

    </div>
    
  )
}
export default Todonewitem;