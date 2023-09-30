import logo from './logo.svg';
import './App.css';
import Container from './Component/Container';
import { useEffect, useState } from 'react';
import Input from './Component/Input';

function App() {

  const[data , setdata] = useState([]);
   
    
    const fet = () =>{
      fetch("https://localhost:7148/api/Todo").then((res)=> res.json()).then((dates) =>{
    dates.result.map((dts,Index) =>{
      
      setdata( prev => {
        return[...prev,dts.tittle]
      })
    })
  })
    }
    
    useEffect (() =>{
      fet()
    },[])
   const setdates = (datas) =>{
    
      console.log("Added")
      
      const datatosend = {
        Tittle: datas,
        Image:'Nothing',
      };

      fetch('https://localhost:7148/api/Todo',{
           method: 'POST',
           headers :{
            'Content-Type':'application/json',
           },
           body:JSON.stringify(datatosend),
      }).then((res)=> res.json()).then((resd) => {
        console.log("Response data:" , resd);
      })

      window.location.reload();


       
    }

    const deletes = (id) =>{
        setdata((prev) =>{
          return prev.filter((item,Index) =>{
            return Index !== id;
          })
        })
    }
  return (
    <div className='Firstdiv'>
      <div   className="App">
             
        <Container  setdates={setdates}/>
       
        
        <div className='seconddiv'>
          <ol className='ol'>
          {
          data.map((dat,Index) => {
               return (
                <Input Key={Index} Text={dat} deletes={deletes} id={Index}/>
               )
          })
        }
          </ol>
        </div>
    </div>
    </div>
  );
}

export default App;
