//buttons
const submit = document.querySelector('#submit');
const darkMode = document.querySelector('#dark');
const feed = document.querySelector('#feed');
const play = document.getElementById('play');
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
let sleepingGif = document.querySelector('#scared-gif');

//button functions


const submitFunction = ()=>{
    
    let x = document.getElementById('playerName').value;
    if (x.length > 0){
        eggName = x;
    playerTitle.innerText = x;
    }else{playerTitle.innerText = 'Goombus';}
    playerTitle.style.display = 'block';
    document.querySelector('#player-info').style.display = 'none';
    rules.style.display = 'none';
    egg.style.display = "block";
}

class Pet {
    constructor(name){
        this.name = name;
        this.hunger = 1;
        this.bored = 2;
        this.sleepy = 0;
    }
    isDead(){
        if (this.hunger > 10 || this.bored > 10 || this.sleepy > 10){
            alert('YOUR PET DIED\nRESET TO PLAY AGAIN');
        }
    }
    feedingClick(){
        if(this.hunger === 0){
            this.bored += 5;
        }
        const x = Math.floor(Math.random()*this.hunger);
        if (x === this.hunger){
            this.sleep += 2;
            this.hunger -= x;
        }else{
        this.hunger -= x;
        }
        eating.style.display = "block";
        setTimeout(() => {eating.style.display = "none"}, 2000);
    }
    sleepingClick(){
        if(this.sleepy === 0){
            this.bored += 5;
        }
        const x = Math.floor(Math.random()*this.sleepy);
        this.hunger += 1;
        this.sleepy -= x;
        sleepingGif.style.display = "block";
        setTimeout(() => {sleepingGif.style.display = "none"}, 2000);
        //change display text
    }
    playingClick(){
        if (this.bored <= 1){
            this.sleepy ++;
            this.hunger ++;
        }
        const x = Math.floor(Math.random()*this.bored);
        playing.style.display = "block";
        setTimeout(() => {playing.style.display = "none"}, 2000);
        console.log("playing");
        //update display
    }
}
const newPet = new Pet();
//button eventwatch
play.addEventListener('click', newPet.playingClick);
sleep.addEventListener('click', newPet.sleepingClick);
feed.addEventListener('click', newPet.feedingClick)
//function on timeintervol that checks for death?