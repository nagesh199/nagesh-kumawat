const getData = async(url) =>{
    try {
        let res = await fetch(url);
        let data = await res.json();
        let nagesh = data[0].meals
        return nagesh
    }
    catch(error){
       console.log("error:",error)
    }
};

const append = (data,parent) => {
     parent.innerHTML = null;
    data.map((elem) =>{

        let div = document.createElement("div");

        let image = document.createElement("img");
        image.src = elem.strMealThumb;

        let p1 = document.createElement("p");
        p1.innerText = elem.strMeal;

        let h = document.createElement("h3");
        h.innerText = elem.price;

        div.append(image,p1,h);
        parent.append(div);
    })
}
export {getData,append};