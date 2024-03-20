//const button = document.querySelectorAll("button");
//console.log(button)
//for (const b in button) {
    //b.addEventListener('click', changeText);
//}
//button.addEventListener('click', changeText);

const button1 = document.querySelector(".button1")
button1.addEventListener('click', changeText);

const button2 = document.querySelector("#button1")
button1.addEventListener('click', changeItem);

const heading = document.querySelector('h1');

function changeText() {
    //alert('test successful');
    heading.textContent = `Hello world`;
}



//const x = 'hello';
//console.log(x);

//const button = document.querySelector("button");
//button.addEventListener('click', runFunction);

//function runFunction() {
    //const name = prompt('Please enter a name')
    //button.textContent = `Nice to meet you ${name}`;
//}