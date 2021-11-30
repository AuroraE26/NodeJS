const mongoose = require('mongoose');
const express = require('express');
const Koder= require('./koder.model');
const DB_USER = 'aurora';
const DB_PASSWORD = 'kodemia123';
const DB_HOST = 'cluster0.ibakh.mongodb.net';
const DB_NAME = 'kodemia';
const PORT=8080;

const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

const app = express();

app.get('/',(req,res)=>{
    res.end('endpoint de express');
})

app.get('/koders', async (req,res)=>{
    const koders = await Koder.find({});
    const genderQuery = req.query.gender;
    let result=koders;
    if(genderQuery){
        const isValidGender = genderQuery === 'm' || genderQuery === 'f';          
            if(isValidGender){
                result = await Koder.find({"gender":genderQuery});
            }
            res.json(result);
    }
})

app.post('/koders', async (req,res)=>{
    const koders = await Koder.find({});
    const newName = req.query.name;
    const newLastName = req.query.lastName;
    const newGender = req.query.gender;
    const newAge = req.query.age;
    
    Koder.create(
        {"name":newName,
        "lastName":newLastName, 
        "gender":newGender, 
        "age":newAge}
        );

    res.json(koders);
})

mongoose
    .connect(URL)
    .then(async (connection) => {
        console.log('DB Connected!')
            //Arrancamos servidos cuando ya nos conectamos
            app.listen(PORT, ()=>{
                console.log('Server is running')
            })
        })
    .catch((error) => {
        console.error(error)
    })