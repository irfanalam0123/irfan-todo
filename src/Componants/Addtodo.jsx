import { useRef} from "react";

function Addtodo({ handlenewitem }) {
  // const [itemname, setitemname] = useState();
  // const [date, setdate] = useState();

  const dateChnage=useRef();
    const nameChnage = useRef();

     
  
 // const handlenamechange = (event) => {
  //   setitemname(event.target.value);
  // };
  // const handledatechange = (event) => {
  //   setdate(event.target.value);
  // }

  const handlebutton = (event) => {
    event.preventDefault();
    const itemname=nameChnage.current.value;
    const date=dateChnage.current.value;
    handlenewitem(itemname, date);
    dateChnage.current.value='';
    nameChnage.current.value="";


    // setitemname("");
    // setdate("");
  };

  return (
    <form   classaction="onSubmit" onSubmit={handlebutton} >
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            placeholder="entre the data"
            
            ref={nameChnage}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            placeholder="date"
            
            ref={dateChnage}
          />
        </div>
        <div className="col-2">
          <button  class="btn btn-success">
            success
          </button>
        </div>
      </div>
    </form>
  );
}

export default Addtodo;
