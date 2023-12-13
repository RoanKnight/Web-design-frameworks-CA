import { sandwiches } from "../javascript/menuItems/sandwiches.js";

document.addEventListener('DOMContentLoaded', () => {
  const sandwichesButton = document.querySelector('.category1');

  if (sandwichesButton) {
    sandwichesButton.click();
  }
});

document.querySelectorAll('.category1').forEach((button) => {
  button.addEventListener('click', () => {
    let sandwichesHTML = '';

    sandwiches.forEach((sandwich) => {
      sandwichesHTML += `
      <div class="col-lg-4 col-md-8 col-sm-16 card menuItem justify-content-between">
        <img src="${sandwich.image}" class="card-img-top" alt="" style="height: 200px">
        <div class="card-body">
          <h5 class="card-title">${sandwich.name}</h5>
          <p class="card-text">${sandwich.description}</p>
        </div>
        <div class="card-footer d-flex">
          <h4 class="price">${sandwich.price}</h4>
          <div class="buttons">
            <button class="cartButton btn btn-success">Add to cart</button>
            <input
              type="text"
              placeholder="Qty.."
              value="${sandwich.quantity}"
              class="quantity">
          </div>
          </div>
      </div>`;
    });

    const container = document.querySelector('.section2 .row');
    container.innerHTML += sandwichesHTML;
  });
});