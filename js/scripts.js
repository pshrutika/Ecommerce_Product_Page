/*!
* Start Bootstrap - Shop Item v5.0.5 (https://startbootstrap.com/template/shop-item)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-item/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

const product = [
    {
        id: 0,
        image: 'assets/gg-1.jpg',
        title: 'Starch Sneakers Navy',
        price: 320,
    },
    {
        id: 1,
        image: 'assets/hh-2.jpg',
        title: 'Leather Casual Shoes',
        price: 360,
    },
    {
        id: 2,
        image: 'assets/ee-3.jpg',
        title: 'Guess Hitzo Wedge',
        price: 330,
    },
    {
        id: 3,
        image: 'assets/aa-1.jpg',
        title: 'Gola Suede Hurricane',
        price: 400,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h5>$ ${price}.00</h5>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}

let mainImage = document.getElementById("mainImage");
    let smallImage = document.getElementsByClassName("image");
    smallImage[0].onclick = ()=>{
        mainImage.src = smallImage[0].src;
    }
    smallImage[1].onclick = ()=>{
        mainImage.src = smallImage[1].src;
    }
    smallImage[2].onclick = ()=>{
        mainImage.src = smallImage[2].src;
    }
    smallImage[3].onclick = ()=>{
        mainImage.src = smallImage[3].src;
    }
    smallImage[4].onclick = ()=>{
        mainImage.src = smallImage[4].src;
    }