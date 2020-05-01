
let purchase = document.getElementsByClassName('btn btn-primary btn-purchase')[0]
purchase.addEventListener('click', addItem)

let addToCartButton = document.getElementsByClassName("add_to_cart")
for (let index = 0; index < addToCartButton.length; index++) {
    const element = addToCartButton[index];
    element.addEventListener('click', addItem);
}

function addRow() {
    const div = document.createElement('div');
  
    div.className = 'products';
  
    div.innerHTML = `
      <input type="text" name="name" value="" />
      <input type="text" name="value" value="" />
      <label> 
        <input type="checkbox" name="check" value="1" /> Checked? 
      </label>
      <input type="button" value="-" onclick="removeRow(this)" />
    `;
  
    document.getElementsByClassName('cart_selection')[0].appendChild(div)
  }
  
  function removeRow(input) {
    document.getElementsByClassName('cart_selection').removeChild(input.parentNode);
  }

  function addItem(title, price, imageSrc){
      var addToCartButton1 = event.target
      parentdiv = addToCartButton1.parentElement
      imageDiv = addToCartButton1.parentElement.parentElement
      title = parentdiv.getElementsByClassName('shop-item-title')[0].innerHTML
      price = parentdiv.getElementsByClassName('shop-item-price')[0].innerHTML
      imageSrc = imageDiv.getElementsByClassName('shop-item-image')[0].src

      console.log(title);
      console.log(price);
      console.log(imageSrc);
      
      
      
      let itemShop = document.createElement('div')
      itemShop.className = 'cart-item cart-column'

      itemShop.innerHTML = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" alt="image selected" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
            <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column" >
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div> 
      `;

      document.getElementsByClassName('cart_selection')[0].appendChild(itemShop)
  }