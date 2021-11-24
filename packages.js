const express=require('express')
const app=express() //también llamado server
const port=8080

//Definimos un handler para la ruta localhost:8080/ para el metodo GET
app.get('/koders',(req,res)=>{
// res.send('Hola Koders')
const message={
    message:'Hola Koders'
}
res.json(message)
})

//Post
app.post('/koders',(req,res)=>{
    res.send('Aqui puedes crear koders')
})

//Put
app.put('/koders',(req,res)=>{
    res.send('Aqui puedes sustituir los koders')
})

//Aqui se inicia su server o app
app.listen(port,() =>{
    console.log('Example app listening at ')
})
