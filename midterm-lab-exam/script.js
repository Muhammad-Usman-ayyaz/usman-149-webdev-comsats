var MAX = 3;
var cart = [];
var boxes = document.querySelectorAll('.box');

function countOf(name) {
    var n = 0;
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].name === name) n++;
    }
    return n;
}

function render() {
    document.getElementById('cart-count').textContent = cart.length;
    document.getElementById('cart-empty').hidden = cart.length > 0;

    var list = document.getElementById('cart-list');
    list.innerHTML = '';
    for (var i = 0; i < cart.length; i++) {
        list.innerHTML += '<li>' + cart[i].name + ' - $' + cart[i].price +
            ' <button class="remove" onclick="removeItem(' + i + ')">Remove</button></li>';
    }

    var total = cart.reduce(function (sum, item) { return sum + item.price; }, 0);
    document.getElementById('cart-total').textContent = '$' + total;

    boxes.forEach(function (box) {
        var btn = box.querySelector('.btn');
        if (countOf(box.querySelector('.title').textContent) >= MAX) {
            btn.disabled = true;
            btn.textContent = 'Limit reached';
        } else {
            btn.disabled = false;
            btn.textContent = 'Add to Cart';
        }
    });
}

function removeItem(i) {
    cart.splice(i, 1);
    render();
}

boxes.forEach(function (box) {
    box.querySelector('.btn').onclick = function () {
        var name = box.querySelector('.title').textContent;
        var price = parseFloat(box.querySelector('.price').textContent.replace('$', ''));
        cart.push({ name: name, price: price });
        render();
    };
});

document.querySelector('.cart').onclick = function (e) {
    e.preventDefault();
    var panel = document.getElementById('mini-cart');
    panel.hidden = !panel.hidden;
};

render();