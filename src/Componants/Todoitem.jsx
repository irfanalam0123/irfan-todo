 
 function Todoitem({todoname,tododate ,ondelete}){


  return (
    <div className="row">
      <div className="col-6">{todoname}</div>
      <div className="col-4">{tododate}</div>
      <div className="col-2">
        <button type="button" className="btn btn-danger"
        key={todoname}
        onClick={()=>ondelete(todoname)}>
          delete
        </button>
      </div>
    </div>
  );


  
 }

 export default Todoitem;