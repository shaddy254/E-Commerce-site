
let openImage = document.getElementsByClassName("shop-item-image")
for (let index = 0; index < openImage.length; index++) {
    const element = openImage[index];
    element.addEventListener('click', openDress)
}

let addToCartButton = document.getElementsByClassName("add_to_cart")
for (let index = 0; index < addToCartButton.length; index++) {
    const element = addToCartButton[index];
    element.addEventListener('click', addItem);
}

let openCartB = document.getElementsByClassName("cart_shopping")[0]
    openCartB.addEventListener('click', opencart)

function opencart(){
    // window.open('shoppingcart.html', '_self')
    console.log('opened cart');
    let shoppingcart = document.getElementsByClassName('cart_section')[0]
    shoppingcart.style.display = "block"
    shoppingcart.style.background.color ="blue"

    let removeB = document.getElementsByClassName("btn-danger")
        for (let index = 0; index < removeB.length; index++) {
        const element = removeB[index];
        element.addEventListener('click', removeCartItem)
    }
}

function openDress(event) {
   console.log("dress opened");
   image = event.target
   window.open(image.src, "Window Title", "width=300, height=400");
}

function addItem(title, price, imageSrc){
    var addToCartButton1 = event.target
    parentdiv = addToCartButton1.parentElement
    imageDiv = addToCartButton1.parentElement.parentElement
    title = parentdiv.getElementsByClassName('shop-item-title')[0].innerHTML
    price = parentdiv.getElementsByClassName('shop-item-price')[0].innerHTML
    imageSrc = imageDiv.getElementsByClassName('shop-item-image')[0].src

    let carttotal= document.createElement('div')
    let itemShop = document.createElement('div')
    itemShop.className = 'cart-item cart-column'

    itemShop.innerHTML = `
      <div class="cart-item cart-column">
          <img class="cart-item-image" src="${imageSrc}" alt="image selected" width="100" height="100">
          <br>
          <span class="cart-item-title">${title}</span>
      </div>
          <span class="cart-price cart-column">${price}</span>
      <div class="cart-quantity cart-column" >
          <input class="cart-quantity-input" type="number" value="1">
          <button class="btn-danger" type="button">REMOVE</button>
      </div> 
      <div>  Total </div><br>
     
    `
    carttotal.innerHTML =' <div> Cart Total</div>'
    document.getElementsByClassName('cart_selection')[0].appendChild(itemShop)
}

function removeCartItem() {
    let removeB = event.target
    cartItem = removeB.parentElement.parentElement
    parentElement = cartItem.parentElement
    parentElement.removeChild(cartItem)  
}

function quantityChanged() {
    console.log('quantuity changed');
}

function hideCart(){
    bodyclick = event.target
    cart = document.getElementsByClassName("cart_section")
    parent = cart.parentNode
    parent.removeChild(cart)
}

let menu_but = document.getElementById("nav_butt")
let nav = document.getElementsByClassName('navigation_menu')[0]
menu_but.onclick = function(){
    console.log("clicked");
    // nav.style.display = 'block'
    if(nav.style.display == 'none'){
        nav.style.display = 'block'
    }
    
    else{
        nav.style.display = 'none'
       
    }

  

}