// LEMBRAR Q INSTALOU ARDUINO JSON

const { SerialPort, ReadlineParser } = require('serialport')
const express = require('express')
const app = express()

let obj;

const port = new SerialPort({
    path: "COM5",
    baudRate: 9600,
    dataBits: 8,
    stopBits: 1,
    flowControl: false,
    parity: 'none'
  })
  
    const parser = new ReadlineParser()
    port.pipe(parser)
    parser.on('data', (data) => {
    obj = JSON.parse(data);
    console.log(obj)
  })
  


app.get("/api",(req,res)=>{
    res.json(obj)
})

app.listen(5000,()=>{
    console.log("server started on port 5000")
})
