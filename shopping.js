
let openImage = document.getElementsByClassName("product_image")
let addToCartButton = document.getElementsByClassName("add_to_cart")

for (let index = 0; index < openImage.length; index++) {
    const element = openImage[index];
    element.addEventListener('click', openDress)
}

for (let index = 0; index < addToCartButton.length; index++) {
    const element = addToCartButton[index];
    element.addEventListener('click', addDressToCart);
}


function openDress(event) {
   console.log("dress opened");
   image = event.target
   window.open(image.src, "Window Title", "width=650, height=550");
}

function addDressToCart() {
    console.log('Item added to cart');
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart_selection')
    var cartItems = document.getElementsByClassName('cart-item')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (let index = 0; index < cartItemNames.length; index++) {
        const element = array[index];
        if (cartItemNames[i].innerText == title) {
            alert('this item already added to cart')
        }
    }
    var cart_item = `
    <div class="cart_selection">
        <div class="cart-item cart-column">
            <img src="/images/kiseo.jpeg" alt="image sected" width="100" height="100">
            <span class="cart-item-title">T-Shirt</span>
        </div>
        <span class="cart-price cart-column"> KShs. 1000</span>
        <div class="cart-quantity cart-column" >
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>
    </div>`
    cartRow.innerHTML = cartRowContects
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input').addEventListener('change', quantityChanged)
}