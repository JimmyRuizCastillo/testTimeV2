import LinkedList from "../models/LinkedList.mjs"
let lista = new LinkedList()
let root = document.getElementById("list-bussines")
const rute = "./controllers/bussines.json"
console.time("medicion 1")
fetch(rute)
.then(response => response.json())
.then(data => {
    //En esta parte unicamente se muestran los primeros 100 registros
    
    for (let x=0;x<100;x++) {
        lista.add(data[x].name)
    }
}).catch(err => console.log(err))
console.timeEnd("medicion 1")

function bubbleSort(data){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            
        }
    }
}