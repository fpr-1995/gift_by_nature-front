



function saveCart (cart) {
    localStorage.setItem("cart",JSON.stringify(cart));
}

function getCart (){
    let cart = localStorage.getItem("cart");
    if (cart === null) {//cart empty
        return [];
    } else {
        return JSON.parse(cart);
    }
    return JSON.parse();
    saveCart(cart);
}

function addToCart(product){
    let cart = getCart();
    let foundProduct = cart.find(p => p.id == product.id);
    if (foundProduct != undefined) {
        foundProduct.quantity++;
    } else {
        product.quantity = 1;
        cart.push(product);
    }
    saveCart(cart);
}

function changeProductQuantity(product,quantity) {
    let cart = getCart();
    let foundProduct = cart.find(p => p.id == product.id);
    if (foundProduct != undefined) {
        foundProduct.quantity += quantity;
        if (foundProduct.quantity == 0){
            deleteCart(foundProduct);
        } else {
        saveCart(cart);    
        }   
    }
    
}

function deleteCart(product) {
    let cart = getCart();
    cart = cart.filter(p => p.id != product.id);
    saveCart();
}

function getProductQuantity () {
    let cart = getCart();
    let number = 0;
    for (let product of cart) {
        number += quantity;
    }
}

function getTotalPrice() {
    let cart = getCart();
    let total = 0;
    for (let product of cart) {
        total += product.quantity * product.price;
    }
    return total;
}