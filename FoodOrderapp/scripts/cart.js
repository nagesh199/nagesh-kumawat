let cartarr = JSON.parse(localStorage.getItem("cart"));
//console.log(cartarr)

let displaytotal = document.getElementById("total_price");
function appendData(cart){
    document.getElementById("cart").innerHTML = null;

 cartarr.map((elem,index,array) =>{
  
    let div = document.createElement("div");

    let image = document.createElement("img");
    image.src = elem.strMealThumb;

    let p1 = document.createElement("p");
    p1.innerText = "Meal Name:"+" "+elem.strMeal;

    let h = document.createElement("h3");
    h.innerText = "Price:"+" "+elem.price;

    let btn = document.createElement("button");
    btn.innerText= "Remove";
    btn.addEventListener("click",function(){
      //  cartarr.splice(index,1);

         let part1 = array.slice(0,index);
         let part2 = array.slice(index+1,array.length);
         part1 = part1.concat(part2);
         localStorage.removeItem("cart");
         localStorage.setItem("cart",JSON.stringify(part1));
         data= JSON.parse(localStorage.getItem("cart"));
         document.location.reload();
        appendData(cart)
    })
    btn.setAttribute("id","reomove")

    div.append(image,p1,h,btn);
    document.getElementById("cart").append(div);
})
}
appendData(cart)

const findtoatal = (cartarr) =>{
    let total = cartarr.reduce(function(acc,curr){
        return acc+curr.price;
    },0)
    displaytotal.innerText ="Total Price:"+" "+ total;
}
findtoatal(cartarr)
