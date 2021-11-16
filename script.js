/*const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";

document.querySelector("body").appendChild(h2); */

/*const address = {
    street: "44 Longstreet Road",
    city: "Holmdel",
    state: "NJ",
    zipCode: "07733",
}; */

const button = document.querySelector('button');

button.addEventListener('click', event => {
    button.textContent = `Click count: ${event.detail}`;
})

/*const location = document.getElementById('location');

function clickAlert() {
    alert ('I was clicked!');
}

location.addEventListener('click', clickAlert); */