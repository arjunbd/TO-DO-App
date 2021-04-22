let user=document.getElementById("Username");
let pass=document.getElementById("Password");
var count=0;
//login using callback function

function formSubmit(callback) {
    $("form").on("submit", function(e){
        e.preventDefault();
        callback();
    });
}

formSubmit( function() {
    if(user.value=="admin"&&pass.value=="12345")
    {
    window.location = "/todo.html";
    }
    else{
    alert("enter correct credentials")
    }
});
