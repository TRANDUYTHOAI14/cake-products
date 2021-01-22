"use strict";
(function () {
  // get elements
  const cartInfo = document.querySelector("#cart-info");
  const cartBox = document.querySelector("#cart-box");

  // ------- SHOW CART BOX WHEN CLICK cartInfo element
  if (cartInfo) {
    cartInfo.addEventListener("click", function (e) {
      //
      cartBox.classList.toggle("show-cart-box");
    });
  }
})();

// ---------- ADD ITEM TO CART BOX --------------
(function () {
  // get list cart - add event to each item
  const addToCartList = document.querySelectorAll(".add-to-cart");

  // add event each item
  if (addToCartList) {
    // cart box
    const cartBox = document.querySelector("#cart-box");

    addToCartList.forEach((item) => {
      item.addEventListener("click", function (e) {
        // init item info
        const productInfo = {};

        // get product img path - save object
        const imgPath = this.previousElementSibling.src;
        const imgName = imgPath.split("/").pop();

        productInfo.productImage = `img-cart/${imgName}`;

        // get parent product info body
        const cartBody = this.parentElement.nextElementSibling;

        // product name
        const productName = cartBody.querySelector("#store-item-name")
          .innerHTML;
        productInfo.productName = productName;

        // product price
        const productPrice = cartBody.querySelector("#store-item-price")
          .innerHTML;
        productInfo.productPrice = productPrice;

        // append to cart box
        // create element
        const divCart = document.createElement("div");
        divCart.classList.add(
          "cart-item",
          "d-flex",
          "justify-content-between",
          "text-capitalize",
          "my-3"
        );
        divCart.innerHTML = `
        <img src="${productInfo.productImage}" class="img-fluid rounded-circle" id="item-img" alt="">
        <div class="item-text">

          <p id="cart-item-title" class="font-weight-bold mb-0">${productInfo.productName}</p>
          <span>$</span>
          <span id="cart-item-price" class="cart-item-price">${productInfo.productPrice}</span>
        </div>
        <a href="#" id="cart-item-remove" class="cart-item-remove">
          <i class="fas fa-trash"></i>
        </a>
        `;

        // append child parent
        cartBox.prepend(divCart);

        // show alert when success
        alert("sản phẩm được thêm vào giỏ hàng");

        // calculator total price

        const totalPrice = () => {
          //
          const priceList = document.querySelectorAll(".cart-item-price");

          let total = [];

          // save to array
          priceList.forEach((item) => {
            total.push(+item.innerHTML);
          });

          // calculator
          const totalPrices = total.reduce((total, item) => {
            return (total += item);
          }, 0);

          // show price to button
          document.querySelector("#item-count").innerHTML = total.length;
          document.querySelector(".item-total").innerHTML = totalPrices.toFixed(
            2
          );
          document.querySelector("#cart-total").innerHTML = totalPrices.toFixed(
            2
          );
        };

        totalPrice();
      });
    });
  }
})();
