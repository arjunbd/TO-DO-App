let load = document.getElementById("Load");
var count=0;
//function to load checkboxes and todolist as a table
function ajax(){
    var output="";
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if (this.readyState == 4 && this.status == 200) {
            var response=JSON.parse(this.responseText);
            load.innerHTML="";
            var header = document.createElement("header"),
            h1 = document.createElement("h1");
            h1.textContent = "Personalised To-Do List";
            header.appendChild(h1);
            load.appendChild(header);
            var col = ["Id","Task","Status"];
            var t="";
            for (var i=0;i<col.length-1;i++){
                 t+="  "+"<u>"+"  "+"<label style=padding-right:10px> </label>"+"<b>"+col[i]+"</b>"+"</u>";   
                 }      
                 output=t+" "+"<b>"+"<label style=float:right;padding-right:10px>"+"<u>"+col[2]+"</u>"+"</label>"+"</b>"+"<p></p>"; 
            for(var i=0;i<response.length;i++){
                if (response[i].completed==false){
                output+="<p>"+ response[i].id+"."+" "+" <label style=padding-right:10px> </label>"+response[i].title+"<input style=float:right;padding-right:10px type=checkbox "+"</p>";
                }
                else{
                    output+="<p>"+response[i].id+"."+"  "+" <label style=padding-right:10px> </label>"+ response[i].title+"<input type=checkbox checked disabled style=float:right;padding-right:10px>"+"</p>";
                }
    
            }  
        }
        document.getElementById("checkboxes").innerHTML = output;  
    }
  
  
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
}