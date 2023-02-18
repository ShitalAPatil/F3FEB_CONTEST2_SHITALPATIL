function getMenu() {
  fetch('https://free-food-menus-api-production.up.railway.app/burgers')
    .then(response => response.json())
    .then(data => {
      const menu = document.getElementById('menu');
      data.forEach(item => {
        const foodItem = document.createElement('div');
        foodItem.classList.add('food-item');
        foodItem.innerHTML = `
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <p>Price: ${item.price}</p>
        `;
        menu.appendChild(foodItem);
      });
    });
}

function takeOrder() {
  const burgers = ['Cheeseburger', 'Veggie Burger', 'Bacon Burger', 'Mushroom Burger', 'Chicken Burger'];
  const order = {};
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      for (let i = 0; i < 3; i++) {
        const burger = burgers[Math.floor(Math.random() * burgers.length)];
        order[burger] = (order[burger] || 0) + 1;
      }
      resolve(order);
    }, 2500);
  });
  promise.then(data => console.log(data));
}

function orderPrep() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ order_status: true, paid: false });
    }, 1500);
  });
  promise.then(data => console.log(data));
}

function payOrder() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ order_status: true, paid: true });
    }, 1000);
  });
  promise.then(data => {
    console.log(data);
    if (data.paid) {
      thankyouFnc();
    }
  });
}

function thankyouFnc() {
  alert('Thank you for your payment!');
}

getMenu();
