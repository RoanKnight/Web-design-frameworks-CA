// Import menu items from different categories
import { sandwiches } from "../javascript/menuItems/sandwiches.js";
import { rolls } from "../javascript/menuItems/rolls.js";
import { soups } from "../javascript/menuItems/soups.js";
import { salads } from "../javascript/menuItems/salads.js";
import { wraps } from "../javascript/menuItems/wraps.js";

// Select the menuContent element
const menuContent = document.querySelector('.section2 .menuContent');

// Execute when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Select all category buttons
  const categoryButtons = document.querySelectorAll('.menu-categories');
  // Select the sandwiches button
  const sandwichesButton = document.querySelector('.category1');

  // Sets the sandwiches button clicke when the page is loaded up
  if (sandwichesButton) {
    sandwichesButton.click();

    // Style the sandwiches button to indicate it's active
    sandwichesButton.classList.add('active', 'text-white', 'bg-success');
    sandwichesButton.classList.remove('text-primary');
  }

  // Add event listeners to category buttons
  categoryButtons.forEach((button) => {
    button.addEventListener('click', () => {
      // Reset styles for all category buttons
      categoryButtons.forEach((btn) => {
        btn.classList.remove('active', 'text-white', 'bg-success');
        btn.classList.add('text-primary');
      });

      // Apply styles to the clicked category button
      button.classList.add('active', 'text-white', 'bg-success');
      button.classList.remove('text-primary');
    });
  });
});

// Render menu items based on category and items data
function renderMenuItems(category, items) {
  menuContent.innerHTML = '';

  let menuItemsHTML = '';

  items.forEach((item) => {
    // Generate HTML for each menu item
    menuItemsHTML += `
      <div class="col-md-8 col-sm-8 my-1">
        <div class="card menuItem" style="height: 480px;">
          <img src="${item.image}" class="card-img-top" alt="" style="height: 200px">
          <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">${item.description}</p>
          </div>
          <div class="card-footer d-flex bg-success justify-content-between">
            <h4 class="price text-light">${item.price}</h4>
            <div class="buttons">
              <img src="${item.cartIcon}" alt="">
            </div>
          </div>
        </div>
      </div>`;
  });

  // Insert the generated HTML into the menuContent element
  menuContent.innerHTML = menuItemsHTML;
}

// Add event listeners for each category button to render respective menu items
document.querySelectorAll('.category1').forEach((button) => {
  button.addEventListener('click', () => {
    renderMenuItems('sandwiches', sandwiches);
  });
});

document.querySelectorAll('.category2').forEach((button) => {
  button.addEventListener('click', () => {
    renderMenuItems('rolls', rolls);
  });
});

document.querySelectorAll('.category3').forEach((button) => {
  button.addEventListener('click', () => {
    renderMenuItems('soups', soups);
  });
});

document.querySelectorAll('.category4').forEach((button) => {
  button.addEventListener('click', () => {
    renderMenuItems('salads', salads);
  });
});

document.querySelectorAll('.category5').forEach((button) => {
  button.addEventListener('click', () => {
    renderMenuItems('wraps', wraps);
  });
});