import React, {useState} from 'react'
import './App.css';
import Backbar from './components/BackBar'
import Leitura from './components/Leitura';



function App() {


  const [backendData,setBackendData] = useState()
  let fill;
  let fill2;


  setInterval(()=>{
    fetch("/api")
    .then(response => response.json())
    .then(data=>{
      setBackendData(data.Data)
    })
    .catch(error => console.error("Error fetching data:", error))
  },1000)

  fill = backendData+"%";
  fill2 = (100-backendData) + "%";

  return (
    <div className="App">
    <Leitura fill = {fill}/>
    <Backbar fill = {fill}/>
    <Leitura fill = {fill2}/>
    <Backbar fill = {fill2}/>
    </div>
  )
}

export default App