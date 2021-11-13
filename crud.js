const fs=require('fs');
const encode='utf8';
//Create
function crearArchivo(nombre, contenido, encode){
    fs.writeFile(nombre, contenido, encode, (error)=>{
        if(error){
            console.error(error);
        }else{
            console.log('Se creo el archivo correctamente');
        }
    });
}



//Read
function leerArchivo(path,encode){
    fs.readFile(path,encode, (error, data)=>{
        if(error){
            console.error(error);
        }else{
            console.log(data);
        }
    });
}

//Update
function editarArchivo(path, dataAp, encode){
    fs.appendFile(path,dataAp,cod, (err) => {
        if (err) throw err;
        console.log('Se agregó el texto existosamente');
      });
    }

//Delete
function borrarArchivo(path){
    fs.unlink(path, (err) => {
        if (err) throw err;
        console.log('Se borro exitosamente');
      });
}


crearArchivo('espacio.txt','Este sera su ejercicio mañana',encode);
leerArchivo('espacio.txt',encode);
editarArchivo('espacio.txt','Estos lo agregue despues',encode);
borrarArchivo('espacio.txt');