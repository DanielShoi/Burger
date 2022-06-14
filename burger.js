let burger = true;

let price1 = 3;
let price2 = 3;

let burger1 = document.getElementById('burger');
let burger2 = document.getElementById('burger2');

const toppings = new Map([
    ['tomatoes', 0],
    ['onions', 0],
    ['lettuces', 0]
]);
const toppings2 = new Map([
    ['tomatoes', 0],
    ['onions', 0],
    ['lettuces', 0]
]);
const prices = new Map([
    ['tomatoes', 0.75],
    ['onions', 0.50],
    ['lettuces', 0.25]
]);


const add = (toppingType) => {
    if (burger) {
        if (toppings.get(toppingType) >= 5) {
            alert('Cant add more than 5 ' + toppingType)
            return;
        }
        const topType = document.getElementById(toppingType);
        const top = document.createElement('div');
        top.id = toppingType + toppings.get(toppingType)
        top.className = (toppingType)
        topType.appendChild(top);
        toppings.set(toppingType, toppings.get(toppingType) + 1)
        price1 += prices.get(toppingType);
        showPrice();
    } else {
        if (toppings2.get(toppingType) >= 5) {
            alert('Cant add more than 5 ' + toppingType)
            return;
        }
        const topType = document.getElementById(toppingType + 'i');
        const top = document.createElement('div');
        top.id = toppingType + 'i' + toppings2.get(toppingType)
        top.className = (toppingType)
        topType.appendChild(top);
        toppings2.set(toppingType, toppings2.get(toppingType) + 1)
        price2 += prices.get(toppingType);
        showPrice();
    }
}

const remove = (toppingType) => {
    if (burger) {
        toppings.set(toppingType, toppings.get(toppingType) - 1)
        const topType = document.getElementById(toppingType);
        const top = document.getElementById(toppingType + toppings.get(toppingType));
        topType.removeChild(top);
        price1 -= prices.get(toppingType);
        showPrice();
    } else {
        toppings2.set(toppingType, toppings2.get(toppingType) - 1)
        const topType = document.getElementById(toppingType + 'i');
        const top = document.getElementById(toppingType + 'i' + toppings2.get(toppingType));
        topType.removeChild(top);
        price2 -= prices.get(toppingType);
        showPrice();
    }
}

const showPrice = () => {
    if (burger) {
        const price = document.getElementById('price1');
        price.innerHTML = "PRICE = $" + price1;
    } else {
        const price = document.getElementById('price2');
        price.innerHTML = "PRICE = $" + price2;
    }
}


const whichBurger = (choose) => {
    if (choose) {
        burger = true;
        burger1.className = "choose1 flex-center";
        burger2.className = "choose2 flex-center";
        return burger;
    } else {
        burger = false;
        burger1.className = "choose2 flex-center";
        burger2.className = "choose1 flex-center";
        return burger;
    }
}