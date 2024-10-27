'use strict';

const products = document.querySelectorAll('.product');
const basketOne = document.querySelector('.basket-one');
const basketTwo = document.querySelector('.basket-two');
const basketThree = document.querySelector('.basket-three');
const btnPay = document.querySelector('.btn-pay');
const basket = document.querySelector('.basket');

let current;
let count = 0;
let zIndex = 1;

products.forEach(function (elem) {
  elem.addEventListener('dragstart', function (e) {
    current = this;
  });
});

basket.addEventListener('dragover', function (e) {
  e.preventDefault();
});

class Shelf {
  constructor(item1, item2, item3, item4) {
    this.shelf = [item1, item2, item3, item4];
  }
  updateBasket(produktsOnShelf, basket, productName) {
    if (produktsOnShelf.includes(productName)) {
      basket.appendChild(current);
      basket.style = `z-index: ${zIndex++}`;
      count += 1;
    }
  }
}

let produktsOnShelfOne = new Shelf('wine', 'milk', 'cake', 'chese');
let produktsOnShelfTwo = new Shelf('beef', 'checken', 'cheeps');
let produktsOnShelfThree = new Shelf('pineapple', 'banana', 'aple', 'salad');

basket.addEventListener('drop', function (e) {
  if (!current) return;
  let productName = current.className.split(' ')[1];
  console.log(productName);

  produktsOnShelfOne.updateBasket(
    produktsOnShelfOne.shelf,
    basketOne,
    productName,
  );
  produktsOnShelfTwo.updateBasket(
    produktsOnShelfTwo.shelf,
    basketTwo,
    productName,
  );
  produktsOnShelfThree.updateBasket(
    produktsOnShelfThree.shelf,
    basketThree,
    productName,
  );

  if (count >= 3) {
    btnPay.classList.add('btn-pay-visible');
  }
});

btnPay.addEventListener('click', () => {
  window.location.href = 'https://lavka.yandex.ru/';
});

function togglePulse() {
  btnPay.classList.toggle('pulsate');
}

setInterval(togglePulse, 2000);
