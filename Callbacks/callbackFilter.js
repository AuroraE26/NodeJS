/*  Si el callback retorna verdadero, añade el valor al array de resultado
    Si el callback retorna falso, ignora el valor*/ 
const numArray=[1,2,3,4,5];
const txtArray=['a','b','c'];

    function filter(arr,callback){
        const resArray=[];
        for(let i=0; i<arr.length; i++){
            //console.log(callback(arr[i]));
            if((callback(arr[i]))==true){
                resArray.push(arr[i]);
            }
        }
        return resArray;
    }

    const resPar = filter(numArray, (x)=> x%2===0);
    const soloUnos = filter(numArray, (x) => x===1);

    console.log(resPar);
    console.log(soloUnos);
    