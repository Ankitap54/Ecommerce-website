import {addToCart,removeToCart} from "./cart.js"

let divElement=document.querySelector(".card-container");

fetch(`https://fakestoreapi.com/products`)

        .then(res => { return res.json() })
        .then(json => {
            divElement.innerHTML="";
            // console.log(json);
            json.forEach((json) => {
                displayUser(json, "afterbegin", 'other');
            })
        })
    

 

    function displayUser(data,pos,className=''){

    let productCard=document.createElement(`div`)
     productCard.classList.add("product");

    const productImage = document.createElement('img');
     productImage.src=data.image

     const productPrice = document.createElement('h3');
     productPrice.textContent=data.price;
 
     const productTitle = document.createElement('h3');
     productTitle.textContent=data.title;

     const productButton = document.createElement('button')
     productButton.classList.add('btn2');
     productButton.textContent='Add to Cart';
  
     const detailsButton = document.createElement('button')
     detailsButton.classList.add('btn3');
     detailsButton.textContent='View Details';
     // const productCat = document.createElement('h4')
    //  productCat.textContent=data.description;


    let anchor=document.createElement("a")
 
    productCard.appendChild( productImage);
    productCard.appendChild(productPrice);
    productCard.appendChild( productTitle);
    productCard.appendChild(productButton);
    // productCard.appendChild(detailsButton);
    anchor.appendChild(detailsButton);
    productCard.appendChild(anchor);
    divElement.appendChild(productCard);

productButton.addEventListener('click',function(){
  
  if(productButton.textContent=="Add to Cart"){
    productButton.textContent=`Remove`;
    addToCart(data)
  }
  else if(productButton.textContent=="Remove"){
    productButton.textContent=`Add to Cart`;
    removeToCart(data)

  }
});

detailsButton.addEventListener("click",(event)=>{
  event.preventDefault()
  window.location.href=`veiw.html?id=${data.id}`


})

}

  
  
  



let cat = document.querySelector(".cata")

function displayCat(data){

    let card=document.createElement('div')
    card.classList.add('user-card');
    cat.append(card);
    
    let catItem=document.createElement('div')
    catItem.classList.add('suggested-item')
    catItem.textContent=data;
    card.append(catItem);

    catItem.addEventListener("click",(event)=>{
        const categoryvalue=event.target.textContent
        console.log(categoryvalue)
        fetch(`https://fakestoreapi.com/products/category/${categoryvalue}`)
        .then(res => res.json())
        .then(json=>{
          console.log(json)
       divElement.innerHTML="";
          json.forEach((json)=>{
           displayUser(json,"afterbegin","other");



           document.querySelector(".card-container").scrollIntoView({
            behavior: 'smooth'
        });

        
      })
      })
      })
    
}
    

async function data(){
fetch('https://fakestoreapi.com/products/categories')
.then(res => res.json())
//.then(console.log);
.then(json=>{
json.forEach((json)=>{
//  console.log(json);
 displayCat(json, "afterbegin" );
  })
})   
}

data();
   

