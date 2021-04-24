let load = document.getElementById("Load");
var count=0;
//function to load checkboxes and todolist as a table
function ajax(){
  var table=document.createElement("table");
  var xhttp=new XMLHttpRequest();
  xhttp.onreadystatechange=function(){
      if(this.readyState == 4 && this.status == 200){
          var response=JSON.parse(this.responseText);
          load.innerHTML="";
          var header = document.createElement("header"),
          h1 = document.createElement("h1");
          h1.textContent = "Personalised To-Do List";
          header.appendChild(h1);
          load.appendChild(header);
          var col = ["Id","Task","Status"];
          var tr = table.insertRow(-1);
          for (var i=0;i<col.length;i++){
              var th=document.createElement("th");
               var th=tr.insertCell(-1);
               th.innerHTML="<u>"+"<b>"+col[i]+"</b>"+"</u>";
               th=tr.insertCell(-1);
               tr.appendChild(th);
          }
          for(var i=0;i<response.length;i++){
              tr=table.insertRow(-1);
              for(var j=0;j<col.length;j++){
                  var tabCell=tr.insertCell(-1);
                 
                   if(j==0){tabCell.innerHTML=response[i].id;}
                   
                  else if(j==1){var tabCell=tr.insertCell(-1);
                      tabCell.innerHTML=response[i].title;}
                  else{
                     var tabCell=tr.insertCell(-1);
                      
                      var check = response[i].completed;
                      if(check == true){
                          var ch=document.createElement("INPUT");
                          ch.setAttribute("type","checkbox");
                          ch.setAttribute("checked","checked");
                          ch.setAttribute("disabled","true");
                          tabCell.appendChild(ch);
                      }
                      else{
                          var ch=document.createElement("INPUT");
                          ch.setAttribute("type","checkbox");
                          tabCell.appendChild(ch);
                      }
                  }
              }
          }
      }
  }
  var div=document.getElementById("checkboxes");
  div.appendChild(table);
  xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
  xhttp.send();
}