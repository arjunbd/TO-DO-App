let todo= document.getElementById("checkboxes");
//promise based checkbox counting

function countbox(){
    return new Promise(function(resolve,reject){
    var count=0;
    var check = document.querySelectorAll('input[type="checkbox"]:enabled');
    for (var checkbox of check) {  
if(checkbox.checked)
       {
            count+=1;
}
      }  
    if(count==5)
    {
        resolve("Successfully done 5 tasks!")
    }
    else{
        reject("not yet")
    }
   })
    }
    
    //event listener to track changes in checkbox

todo.addEventListener("change", Test);
    function Test(){
       countbox().then(function (e){
            setTimeout(function(){ alert(e); }, 50);
       })
       .catch(function(e){
           console.log(e);
       })
        
   }
