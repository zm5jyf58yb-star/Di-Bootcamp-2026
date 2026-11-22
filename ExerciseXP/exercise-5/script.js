const containerDiv = document.querySelector('div')

document.body.innerHTML = document.body.innerHTML.replace('Pete', 'Richard')


// ------------------------------------------
const secondUl = document.querySelectorAll('ul')[1]
if(secondUl){
    const secondLiOfSecondUl =secondUl.querySelectorAll('li')[1];
    if(secondLiOfSecondUl){
        secondLiOfSecondUl.remove();
    }
}


// ------------------------------------------
const allUls = document.querySelectorAll('ul');
allUls.forEach(ul => {
    const firstLi = ul.querySelector('li');
    if(firstLi){
        firstLi.textContent = 'Thant';
    }
});


// -------------------------------------------
const allLists = document.querySelectorAll('ul')
allLists.forEach ((list, index) => {
    list.classList.add('student_list');
    if(index === 0){
        list.classList.add('university', 'attendance');
    }

});


// ---------------------------------------------
const ContainerDiv = document.querySelector('#container');
if(ContainerDiv){
    ContainerDiv.style.backgroundColor = 'lightblue';
    ContainerDiv.style.padding = '20px';
}


// ----------------------------------------------
const firstUl = document.querySelector('ul');
if(firstUl){
    const listItems = firstUl.querySelectorAll('li');
    const lastLi = listItems[listItems.length -1];
    if(lastLi === 'Dan'){
        lastLi.style.display = 'none'; //not display
    }
}


// -----------------------------------------------
const allUl = document.querySelectorAll('ul');
const SecondUl = allUl[1];
if(secondUl){
    const allLi = secondUl.querySelectorAll('li');
    const secondLi = allLi[1];
    if(secondLi=== 'Richard'){
        secondLi.style.border = '2px solid blue';
        secondLi.style.padding = '10px';
    }
}


// ------------------------------------------------
const elementBody = document.querySelector('body');
if(elementBody){
    elementBody.style.fontSize = '18px';
}
console.log(elementBody)


// ------------------------------------------------
const containerDiv2 = document.querySelector('#container');
if(containerDiv2){
    const bgColor = containerDiv2.style.backgroundColor;
    if(bgColor === 'light blue'){
        const users = containerDiv2.querySelectorAll('li');
        if(users.length >= 2){
            const userX = users[0].textContent.trim();
            const userY = users[1].textContent.trim();
            
            alert(`Hello ${userX} and ${userY}`);
        }
       
    }

}
