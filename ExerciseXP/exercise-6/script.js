const divElement = document.getElementById('navBar')
divElement.setAttribute('id', "socialNetworkNavigation");

const newListitem = document.createElement('li');

const logOuttextnode = document.createTextNode('loglut');

newListitem.appendChild(logOuttextnode);
console.log(newListitem)

const listContainer = divElement.querySelector('ul');
listContainer.appendChild(newListitem);
console.log(listContainer)

const listItem =document.querySelector('#socialNetworkNavigation ul');

const firstListitem = listItem.firstElementChild;
const lastListitem = listItem.lastElementChild;

console.log("First item:", firstListitem.textContent.trim())
console.log("Last item:", lastListitem.textContent.trim())

