import { useState } from 'react';
import './App.css';
import Plan from './component/Plan';
function App() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");
  const handleChange = (event) => {
    //console.log("onchange");
    setText(event.target.value);
  }
  const handleAdd = () => {
    if (text!==" ")
    {
      setItems( arr => [...arr,text]);
      setText("");
    }
  }
  const handleDelete= (id) =>{
    console.log("delete",id);
    const olditem=items;
    console.log("olditem",olditem);
    const item=olditem.filter((element,i)=>{
      return i !== id
    })
    setItems(item);
  }
  return (
    <>
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
            <h2 className='text-center'>Today's Plan</h2>
            <div className="row">
              <div className="col-9">
                <input type="text" className='form-control' placeholder='Write plan here' value={text} onChange={handleChange} />
              </div>
              <div className="col-2">
                <button className='btn btn-warning px-5 fw-bold' onClick={handleAdd}>Add</button>
              </div>
              <div className="container-fluid">
                <ul className='list-unstyled row m-5'>
                  <Plan />
                  {
                    items.map((value,i)=>{
                      return <Plan key={i} id={i} value={value} sendData={handleDelete} />
                    })
                  }
                </ul>
              </div>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}

export default App;
