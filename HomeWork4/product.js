'use strict';
function Product(name, price) {
    this.name = name;
    this.price = price;
}

function make25PercentDiscount(discount) {
    this.price = this.price - (this.price / 100 * discount);
}

class make25PercentDiscount {
    constructor(discount) {
        this.price = this.price - (this.price / 100 * discount);
    }
}