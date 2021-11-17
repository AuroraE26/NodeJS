const { read } = require('fs');
const fs=require('fs/promises');
const encode='utf8';


//Create
async function crearArchivo(nombre, contenido, encode){
    try{
        await fs.writeFile(nombre, contenido, encode);
            console.log('Archivo creado exitosamente');
        }catch (error){
            console.log(error);
        }
}

//Read
async function leerArchivo(path,encode){
    try{
        const data= await fs.readFile(path,encode);
        console.log(data);

    }catch(error){
        console.log(error);
    }
}

//Update
async function editarArchivo(path, dataAp, encode){
        try{
            await fs.appendFile(path,dataAp,encode);
            console.log('Se agregó: '+ dataAp);
        }catch(error){
            console.log(error);
        }

    }


//Delete
async function borrarArchivo(path){
    await fs.unlink(path, (err) => {
        if (err) throw err;
      });
}

//Mkdir vacía
async function createMkdir(path){
    try{
       await fs.mkdir(path);
    }catch(err){
        return console.error(err);
    }
}

//Mkdir Llena
async function fullMkdir(path,encode){
    try{
        await fs.mkdir(path);
        crearArchivo('./FullMKDIR/mkdir1.txt','Archivo creado para llenar mkdir1',encode);
        crearArchivo('./FullMKDIR/mkdir2.txt','Archivo creado para llenar mkdir2',encode);
        crearArchivo('./FullMKDIR/mkdir3.txt','Archivo creado para llenar mkdir3',encode);
    }catch(err){
        return console.error(err);
    }
}

//fs.rmdir
async function eraseMDIR(path){
    try{
        await fs.rmdir(path)
    }catch(error){
        return console.log(error);
    }
}

//fs.readdir
async function readMDIR(path, encode){
    try{
        const readDir= await fs.readdir(path, encode);
        console.log(readDir);   
    }catch(error){
        return console.log(error);
    }
}


//CRUD ARCHIVOS
crearArchivo('asyncAwait.txt','Archivo creado de async await',encode);
leerArchivo('asyncAwait.txt',encode);
editarArchivo('asyncAwait.txt','\nEste texto lo agregue despues',encode);
borrarArchivo('asyncAwait.txt');

//CRUD CARPETAS
createMkdir('./NuevoMKDI');
fullMkdir('./FullMKDIR',encode);
eraseMDIR('./NuevoMKDIR')
readMDIR('./FullMKDIR',encode)