const submit = () =>{
    alert("Order is Accepted!");

 setTimeout(function () {
 alert("Your order is being cooked");
 },3000)

 setTimeout(function (){
     alert("Your order is ready")
 },12000)

 setTimeout(function (){
     alert("Your order is out for delivery")
 },20000)

 setTimeout(function (){
     alert("Order delivered")
 },30000)     
}