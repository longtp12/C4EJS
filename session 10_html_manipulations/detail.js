let productId = parseInt(localStorage.getItem('selectedProductId',));

let products = JSON.parse(localStorage.getItem('products'));

let product = products.find(function(value){
    return value.id === productId;
})


