document.getElementById("form").addEventListener("submit",formsubmit);
let arrsign = JSON.parse(localStorage.getItem("signup"))||[];
console.log(arrsign)
    function formsubmit(){
    let name = document.getElementById("name").value;
    let number = document.getElementById("number").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    console.log(name)
    var signobj = function(n,nu,e,p){
        this.name = name;
        this.number = number;
        this.email = email;
        this.password = password;
    }
    var signdata = new signobj(name,number,email,password);
    console.log(signdata)
    arrsign.push(signdata);
    localStorage.setItem("signup",JSON.stringify(arrsign));
  // window.location.href="login.html"
}
