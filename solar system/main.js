//getting all existing elements:
const body = document.querySelector('body');

const header = document.querySelector('header');
const h1 = document.querySelector('h1');
const input = document.querySelector('input');
const select = document.querySelector('select');
const option = document.querySelectorAll('option')
const button = document.querySelector('button');

const main  = document.querySelector('main');
const flexContainer = document.querySelector('.flex-container');
const flexItem = document.querySelectorAll('.flex-item');
const flexImage = document.querySelector('.image');
const image = document.querySelector('.planet-image');
const flexDescription = document.querySelector('.description');


const text = document.createElement('p');
flexDescription.appendChild(text);

const circle = document.createElement('div');
flexDescription.appendChild(circle);
circle.style.padding = '5rem';
circle.style.borderRadius = '60%';


//setting basic styles:
body.style.fontFamily = 'Montserrat';
body.style.textAlign = 'center'
body.style.background = 'url(./images/galaxy.gif)';

header.style.margin = '5rem 0 2rem 0';

h1.style.color = 'white';
h1.style.textShadow = '5px 0  #478779';
h1.style.fontSize = '3rem';
h1.style.margin = '0 0 7.5rem 0'

input.style.height = '2rem';
input.style.width = '20rem';
input.style.outline = 'none'

select.style.height = '2.5rem';
select.style.outline = 'none';
select.style.color = 'grey';

flexDescription.style.background = 'rgba(0,0,0,0.5)';
flexDescription.style.padding = '4rem 7rem';
flexDescription.style.display = 'none'
flexDescription.style.color = 'white';

function addingPlanets(...arg){
    const array = [...arg]
    for(let i = 0; i < array.length; i++){
        let newOption = new Option(`${array[i]}`, `${array[i]}`)
        select.add(newOption);
    }
}
addingPlanets('mercury', 'venus', 'earth', 'moon', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto');

button.style.height = '2.5rem';
button.style.outline = 'noen';
button.style.background = '#737373';
button.style.color = 'white';

main.style.background = 'rgba(115,115,115,0.25)';
main.style.width = '80vw';
main.style.margin = '0 auto';
main.style.padding = '5rem';


//adding functions:

const planets = {
    mercury:{
        factor: 3.7,
        image: './images/mercury.png'
    },
    venus:{
        factor: 8.87,
        image: './images/venus.png'
    },
    earth:{
        factor: 9.81,
        image: './images/earth.png'
    },
    moon:{
        factor: 1.62,
        image: './images/moon.png'
    },
    mars:{
        factor: 3.71,
        image: './images/mars.png'
    },
    jupiter:{
        factor: 24.79,
        image: './images/jupiter.png'
    },
    saturn:{
        factor: 11.19,
        image: './images/saturn.png'
    },
    uranus:{
        factor: 9.01,
        image: './images/uranus.png'
    },
    neptune:{
        factor: 11.28,
        image: './images/neptune.png'
    },
    pluto:{
        factor: 0.61,
        image: './images/pluto.png'
    }
}

select.addEventListener('input', e => {
    if(select.value === 'none'){
        select.style.color = 'grey'
    }else{
        select.style.color = 'black'
    }
})

button.addEventListener('click', e => {
    if(input.value % 1 === 0 && input.value !== '' && select.value !== 'none'){
        let weight = input.value * planets[select.value].factor;
        let weightRound = weight.toFixed(2);
        circle.style.display = 'block'
        flexContainer.style.display = 'flex';
        flexContainer.style.justifyContent = 'space-between'; 
        image.style.display = 'inline-block';
        flexDescription.style.display = 'block';
        circle.style.display = 'block'
        image.src = planets[select.value].image;
        text.style.fontSize = '2rem'
        circle.style.background = 'rgba(115,115,115,0.25)';
        circle.style.fontSize = '2rem';
        flexDescription.style.display = 'flex';
        flexDescription.style.flexDirection = 'column';
        flexDescription.style.alignItems = 'center';
        flexDescription.style.justifyContent = 'space-evenly';
        text.textContent = `The weight of your object on ${select.value} is:`;
        circle.textContent = `${weightRound}N`;
        console.log(input.value);
    }else if(input.value === ''){
        image.style.display = 'none';
        flexContainer.style.justifyContent = 'center';
        flexContainer.style.alignItems = 'center';
        text.textContent = `Mass is required`;
        flexDescription.style.display = 'block';
        circle.style.display = 'none';
        console.log(input.value);
    }else if(input.value % 1 === 0 && select.value === 'none'){
        image.style.display = 'none';
        flexContainer.style.justifyContent = 'center';
        flexContainer.style.alignItems = 'center';
        text.textContent = `Please select a planet`;
        flexDescription.style.display = 'block';
        circle.style.display = 'none';
        console.log(input.value);
    }else if(typeof input.value === 'string'){
        image.style.display = 'none';
        flexContainer.style.justifyContent = 'center';
        flexContainer.style.alignItems = 'center';
        text.textContent = `Please type in an integer not a string or a float`;
        flexDescription.style.display = 'block';
        circle.style.display = 'none';
        console.log(input.value);
    }
})



