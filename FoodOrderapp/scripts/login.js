let arrsigndata = JSON.parse(localStorage.getItem("signup"))||[];
    
document.getElementById("form").addEventListener("submit",loginform);

function loginform(event){
    event.preventDefault()
    let Email = document.getElementById("email").value;
    let Pass = document.getElementById("pass").value;
    for( let i=0; i<arrsigndata.length; i++){
        if(arrsigndata[i].email == Email && arrsigndata[i].password == Pass){
            alert("Login Successfull");
            window.location.href ="index.html"
        }
        else {
            alert("Invalid Credentials")
        }
    }
}