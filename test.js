let jtodo= document.getElementById("checkboxes");
let load = document.getElementById("Load");
let table1 = document.querySelector("table");
var count=0;

//function to load the checkboxes and todo list
function create(){
    var xhttp= new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
     if(this.readyState==4&&this.status==200){
        var data=JSON.parse(this.responseText);
        load.innerHTML="";
        var header = document.createElement("header"),
        h1 = document.createElement("h1");
        h1.textContent = "Here is your personalised To-Do List";
        header.appendChild(h1);
        load.appendChild(header);
        let table = document.querySelector("table");
        let data1 = Object.keys(data[0]);
        function generateTableHead(table, data) {
            let thead = table.createTHead();
            let row = thead.insertRow();
            for (let key of data) {
              let th = document.createElement("th");
              let text = document.createTextNode(key);
              th.appendChild(text);
              row.appendChild(th);
            }
          }
          
          function generateTable(table, data) {
            for (let element of data) {
              let row = table.insertRow();
              for (key in element) {
                let cell = row.insertCell();
                let text = document.createTextNode(element[key]);
                cell.appendChild(text);
              }
            }
          }
        console.log(data1);
        generateTableHead(table, data1);
        generateTable(table, data);
     }
    }
     xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
     xhttp.send();
 }
