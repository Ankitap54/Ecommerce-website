

export function addToCart(product){

  let card=JSON.parse(localStorage.getItem("card")) || [];
  card.push(product);
  localStorage.setItem("card",JSON.stringify(card))
  //alert product has been added to the cart
  console.log(card)
  }


  export function removeToCart(product){
    let card=JSON.parse(localStorage.getItem('card')) || [];
    let arr=card.findIndex((element)=>product.id==element.id)
    console.log(arr)
    card.splice(arr,1)
    localStorage.setItem('card',JSON.stringify(card));
    console.log(card);
    }




 function getCard(){

  let cards=JSON.parse(localStorage.getItem('card'))||[]
  console.log(cards);
  let divElement=document.querySelector(".card-container");
  console.log(divElement)
  divElement.innerHTML="";
  cards.forEach((data)=>{

  
    let productCard=document.createElement(`div`)
     productCard.classList.add("product");

    const productImage = document.createElement('img');
     productImage.src=data.image;

     const productPrice = document.createElement('h3');
     productPrice.textContent=data.price;
 
     const productTitle = document.createElement('h3');
     productTitle.textContent=data.title;
 
     const productButton = document.createElement('button')
     productButton.classList.add('btn2');
     productButton.textContent='Remove';
 
   const detailsButton = document.createElement('button')
     detailsButton.classList.add('btn3');
     detailsButton.textContent='View Details';

     const buy=document.createElement('button')
     buy.classList.add('buybtn');
     buy.textContent='Buy Now';
    
     productCard.appendChild(productImage);
     productCard.appendChild(productPrice);
     productCard.appendChild(productTitle);
    //  productCard.appendChild( productCat);
     productCard.appendChild(productButton);
    //  productCard.appendChild(breakLine);
     productCard.appendChild(detailsButton);
     productCard.appendChild(buy);
 
     divElement.appendChild(productCard);

     productButton.addEventListener("click",function(){
      removeToCart(data);
       getCard();    
       });


  }) 
  
  
  
}


 getCard();