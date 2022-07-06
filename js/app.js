//buttons
const submit = document.querySelector('#submit');
const darkMode = document.querySelector('#dark');
const feed = document.querySelector('#feed');
const play = document.querySelector('#play');
const sleep = document.querySelector('#sleep');

//text displays
const rules = document.querySelector('article');
const playerTitle = document.querySelector('#player-title');
const playerInfo = document.querySelector('form');
const hungerStat = document.querySelector('li #hunger-stat');
const sleepStat = document.querySelector('li #sleep-stat');
const boredomStat = document.querySelector('li #bordeom-stat');
const ageStat = document.querySelector('li #age-stat');
let eggName = 'Goombus';
//images and gifs
let egg = document.querySelector('#egg');
let baby = document.querySelector('#baby');
let child = document.querySelector('#child');
let adult = document.querySelector('#adult');
let eating = document.querySelector('#eating-gif');
let playing = document.querySelector('#playing-gif');
let scared = document.querySelector('#scared-gif');
//button functions


const submitFunction = ()=>{
    
    let x = document.getElementById('playerName').value;
    console.log(x);
    if (x.length > 0){
        eggName = x;
    playerTitle.innerText = x;
    }else{playerTitle.innerText = 'Goombus';}
    playerTitle.style.display = 'block';
    document.querySelector('#player-info').style.display = 'none';
    rules.style.display = 'none';
    const newPet = new Pet(eggName);
}
//button eventwatch
submit.addEventListener('onsubmit', submitFunction);
// submit.addEventListener('submit', 

//function on timeintervol that checks for death?
class Pet {
    constructor(name){
        this.name = name;
        this.hunger = 1;
        this.bored = 2;
        this.sleepy = 0;
    }
}