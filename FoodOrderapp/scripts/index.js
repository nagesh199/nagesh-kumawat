
const getData = async() =>{
    try {
        let res = await fetch(`https://masai-food-api.herokuapp.com/api/meals/india`);
        let data = await res.json();
        let nagesh = data[0].meals
        append(nagesh);
    }
    catch(error){
       console.log("error:",error)
    }
};
getData();

let cartArr = JSON.parse(localStorage.getItem("cart"))||[];
//console.log(cartArr)

const append = (data) => {
    
   data.map((elem) =>{
   // document.getElementById("menu").innerHTML = null;
       let div = document.createElement("div");

       let image = document.createElement("img");
       image.src = elem.strMealThumb;

       let p1 = document.createElement("p");
       p1.innerText = "Meal Name:"+" "+elem.strMeal;

       let h = document.createElement("h3");
       h.innerText = "Price:"+" "+elem.price;

       let btn = document.createElement("button");
       btn.innerText= "Add To Cart";
       btn.addEventListener("click",function(){
           addtocart(elem);
       })
       btn.setAttribute("id","addtocart")

       div.append(image,p1,h,btn);
       console.log(div)
       document.getElementById("menu").append(div);
   })
}
let num = 1;
const addtocart =(elem) =>{
     document.getElementById("count").innerText = num++;
     cartArr.push(elem);
     localStorage.setItem("cart",JSON.stringify(cartArr));
    // window.location.herf = "./FoodOrderapp/cart.html"
}