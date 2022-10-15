//Question 1
const nonQuerySection = document.getElementById('container');

//Question 2
const querySection = document.querySelector('#container');

//Question 3 
const secondLi = document.querySelectorAll('.second');

//Question 4
const thirdOl = document.querySelector('ol .third');

//Question 5
querySection.prepend('Hello!');

//Question 6
const footerDiv = document.querySelector('.footer');
footerDiv.classList += ' main';

//Question 7
footerDiv.classList.remove('main');

//Question 8
const newLi = document.createElement('li');

//Question 9
newLi.innerText = 'four';

//Question 10
const ul = document.querySelector('ul');
ul.append(newLi);

//Question 11
const allLiOl = document.querySelectorAll('ol li');

for(let li of allLiOl){
    li.style.backgroundColor = 'green';
}

//Question 12
footerDiv.remove();



