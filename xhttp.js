let jtodo= document.getElementById("checkboxes");
let load = document.getElementById("Load");
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
         for(var i=0;i<data.length;i++){
         var breakl = document.createElement("br");
         var chk = document.createElement('input');  
         chk.setAttribute('type', 'checkbox');  
         chk.setAttribute('id','1');
         chk.setAttribute('value',data[i].title);
         if(data[i].completed==true){
             chk.setAttribute("checked", "true");
             chk.setAttribute("disabled","disabled");
         }
         var lbl = document.createElement('label'); 
         lbl.setAttribute('for',data[i].id);
         lbl.appendChild(document.createTextNode(data[i].title));
         lbl.style.fontSize = "x-large";
         jtodo.appendChild(chk);
         jtodo.appendChild(lbl);
         jtodo.appendChild(breakl);
         //console.log(chk.id)
         i=i+1;
         }
     }
     }
     xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
     xhttp.send();
 }