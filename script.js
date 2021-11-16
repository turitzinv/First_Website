/*const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";

document.querySelector("body").appendChild(h2); */

const address = {
    street: "44 Longstreet Road",
    city: "Holmdel",
    state: "NJ",
    zipCode: "07733",
};

const location = document.getElementById('location');

function clickAlert() {
    alert ('I was clicked!');
}

location.addEventListener('click', clickAlert);