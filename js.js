// document.body.style.backgroundColor = "pink";
// var cart = document.getElementById('cart');
// const title = document.createElement("h1");
// const cont = document.createTextNode("hellooooooooooooooo");
// title.appendChild(cont);
// cart.appendChild(title);
// let img = document.createElement("img");
// img.setAttribute("src","images/ice.png");
// img.setAttribute("alt","image");
// cart.appendChild(img);



const data_product = [
    {
        id_prod : 1,
        img : "images/ice.png" ,
        titre_prod : "ice cream",
        price : 30,
        quantity : 0,
        buyed: true,
    },
    {
        id_prod : 2,
        img : "images/ice_cream.png" ,
        titre_prod : "ice cream",
        price : 12,
        quantity : 0,
        buyed: true,
    },
    {
        id_prod : 3,
        img : "images/pencil.jpg" ,
        titre_prod : "pencil",
        price : 14,
        quantity : 0,
        buyed: true,
    },
    {
        id_prod : 4,
        img : "images/wom.jpg" ,
        titre_prod : "cover",
        price : 25,
        quantity : 0,
        buyed: true,
    }
]

document.body.style.backgroundColor = "pink";
let cart = document.getElementById('cart');

const newdiv = document.createElement("div");
newdiv.setAttribute("id","produit");

data_product.forEach(item =>{
const divprod = document.createElement("div");
divprod.setAttribute("class","prod1");

const id_prod = document.createElement("h3");
id_prod.innerHTML= item.id_prod;
divprod.appendChild(id_prod);

let img = document.createElement("img");
img.setAttribute("src",item.img);
img.setAttribute("alt","images");
divprod.appendChild(img);

const titre_prod = document.createElement("h3");
titre_prod.innerHTML= item.titre_prod;
divprod.appendChild(titre_prod);


let icon = document.createElement("div");
let like = document.createElement("i");
like.setAttribute("class","fa-regular fa-heart");
like.addEventListener("click",() =>{
    like.classList.toggle("fa-solid")
})
like.setAttribute("style","color : red");
icon.appendChild(like);


let remove = document.createElement("i");
remove.setAttribute("class","fa-sharp fa-solid fa-trash");
remove.setAttribute("style","color : red");
remove.addEventListener("click",() =>{
    divprod.remove();
    item.buyed = false;
    total_price.innerHTML = totalPrice() + "$";
})
icon.appendChild(remove);
divprod.appendChild(icon);


let price_div = document.createElement("div");
price_div.setAttribute("class","price_quantity");

let quantity = document.createElement("input");
quantity.setAttribute("type", "number");
quantity.setAttribute("min", "0");
quantity.setAttribute("value", "0");
price_div.appendChild(quantity);


let priceup = document.createElement("span");
priceup.innerHTML =  "0$";
priceup.setAttribute("class","prix");
quantity.addEventListener("change", (e) => {
    item.quantity = e.target.value;
    let prix = item.quantity * item.price;
    priceup.innerHTML = prix + "$";
    total_price.innerHTML = totalPrice() + "$";
})
price_div.appendChild(priceup);
divprod.appendChild(price_div);

//style cart

divprod.style.display = "flex";
divprod.style.gap = "55px";
divprod.style.borderBottom = "4px double gray";
divprod.style.padding = "10px";
divprod.style.width = "680px";

titre_prod.style.width = "100px"

price_div.style.paddingTop = "20px";
remove.style.margin = "20px";
remove.style.cursor = "pointer";
like.style.cursor = "pointer";

img.style.height = "50px";
img.style.width = "50px";

quantity.style.width = "60px";
quantity.style.height = "15px";

price_div.style.marginLeft = "20px"
price_div.style.gap = "70px"
price_div.style.display = "flex";

newdiv.appendChild(divprod);
});
const global_price = document.createElement("div");
newdiv.setAttribute("id","global_price");

const total = document.createElement("h4");
total.innerHTML= "Total price :";

global_price.appendChild(total);

let total_price = document.createElement("span");
total_price.innerHTML =  "0$";
total_price.setAttribute("class","prix_total");

function totalPrice() {
    return data_product.filter(e => e.buyed == true ? e : "").reduce((acc, currentvalue) => acc += currentvalue.price * currentvalue.quantity, 0);
}

global_price.appendChild(total_price);
newdiv.appendChild(global_price);
cart.appendChild(newdiv);

global_price.style.display = "flex"
global_price.style.marginLeft = "500px";
total_price.style.marginLeft = "36px";
total_price.style.marginTop = "22px";

console.log(totalPrice());




