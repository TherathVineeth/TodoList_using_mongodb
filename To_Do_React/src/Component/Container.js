import { useState } from 'react';
import './Conatiner.css'
import Input from './Input';

function Containerbx(prop){
    const [temp,settemp] = useState("");

    function handlechange(e){
           console.log(e.target.value);
           settemp(e.target.value);
    }
    function handlesubimt(){
           prop.setdates(temp);
           settemp("");
    }
    return(
        <div className='Divbx'>
            <h1>To Do List</h1>
            <input className='input' type='text'onChange={handlechange} placeholder='Enter your throughts'  value={temp}/>
            <br/>
            <button onClick={handlesubimt} className='btn'> Add To List</button>
            
        </div>
    )
}




export default Containerbx;