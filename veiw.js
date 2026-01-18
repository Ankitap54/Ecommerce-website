function getidfromURL(){
  const params=new URLSearchParams(window.location.search)
 return params.get("id")
  // console.log(params.get("id"))
  }
const productid =getidfromURL()
fetchURL(productid);
async function fetchURL(id){
  const request=await fetch(`https://fakestoreapi.com/products/${id}`)
  const data=await request.json()
  
 getCarddetails(data);

}


function getCarddetails(data){

  
  let divElement=document.querySelector(".card-container");
  // console.log(divElement)
  divElement.innerHTML="";
  let productCard=document.createElement(`div`)
     productCard.classList.add("product");

    const productImage = document.createElement('img');
     productImage.src=data.image;

     const productPrice = document.createElement('h4');
     productPrice.textContent=`$${data.price}`;
 
     const productTitle = document.createElement('h3');
     productTitle.textContent=data.title;

     const productDescripition = document.createElement('h6');
     productDescripition.textContent=data.description;
 
    //  const productButton = document.createElement('button')
    //  productButton.classList.add('btn2');
    //  productButton.textContent='remove to cart';


     const buy=document.createElement('button')
     buy.classList.add('buybtn');
     buy.textContent='Buy Now';
 

    productCard.appendChild(productImage);
     productCard.appendChild(productPrice);
     productCard.appendChild(productTitle);
    productCard.appendChild( productDescripition);
    //  productCard.appendChild(productButton);
     productCard.appendChild(buy);
   
divElement.appendChild(productCard);

     productButton.addEventListener("click",function(){
      removeToCart(data);
       getCard();    
       });


  }
