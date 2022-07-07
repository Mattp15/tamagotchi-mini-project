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
const hungerStat = document.querySelector('#hunger-stat');
const sleepStat = document.querySelector('#sleep-stat');
const boredomStat = document.querySelector('#bordeom-stat');
const ageStat = document.querySelector('#age-stat');
let eggName = 'Goombus';
//images and gifs
let egg = document.querySelector('#egg');
let baby = document.querySelector('#baby');
let child = document.querySelector('#child');
let adult = document.querySelector('#adult');
let eating = document.querySelector('#eating-gif');
let playing = document.querySelector('#playing-gif');
let sleepingGif = document.querySelector('#scared-gif');

const submitFunction = ()=>{ 
    let x = document.getElementById('playerName').value;
    if (x.length > 0){
        eggName = x;
    playerTitle.innerText = x;
    }else{playerTitle.innerText = 'Goombus';}
    playerTitle.style.display = 'block';
    document.querySelector('#player-info').style.display = 'none';
    rules.style.display = 'none';
    setTimeout(() => {
        eggHatch();
    }, 1000);
}

class Pet {
    constructor(name){
        this.name = name;
        this.hunger = 1;
        this.bored = 2;
        this.sleepy = 0;
        this.age = 0;
    }
    isDead(){
            // alert('YOUR PET DIED\nRESET TO PLAY AGAIN');
            console.log('Isdead')
            document.querySelector('main').style.display = "none";
    }
    feedingClick(){
        
            this.sleep += 2;
            this.hunger = 0;
            console.log(this.hunger);
        
        eating.style.display = "block";
        setTimeout(() => {eating.style.display = "none"}, 2000);
    }
    sleepingClick(){
        this.hunger += 1;
        this.sleepy = 0;
        sleepingGif.style.display = "block";
        document.querySelector('html').style.backgroundColor = 'black';
        setTimeout(() => {
            sleepingGif.style.display = "none";
            document.querySelector('html').style.backgroundColor = '';
        }, 2000);
    }
    playingClick(){
        if (this.bored <= 1){
            this.sleepy ++;
            this.hunger ++;
        }
        this.bored = 0;
        playing.style.display = "block";
        setTimeout(() => {playing.style.display = "none"}, 2000);
    }
    updateHunger(){
        setInterval(() => {
            hungerStat.innerText = this.hunger;
            console.log(this.hunger);
            if (this.hunger > 10){
                this.isDead();
            }
        }, 500);

    }
    updateSleepy(){
        setInterval(() => {
            sleepStat.innerText = this.sleepy;
        if (this.sleepy > 10){
            this.isDead();
        }}, 500);
    }
    updateBoredom(){
        setInterval(() => {
            boredomStat.innerText = this.bored;
        if (this.bored > 10){
            this.isDead();
        }}, 500);
    }
    updateAge(){
        setInterval(() => {
            ageStat.innerText = this.age;
            if (this.age >= 12 && this.age <21){
                baby.style.display = "none";
                child.style.display = "block";
            }else if (this.age >= 21){
                child.style.display = 'none';
                adult.style.display = "block";
            }
        }, 500)
    }
    addHunger(){
        setInterval(() => {
            this.hunger++;
        }, 10000)
    }
    addSleepy(){
        setInterval(() => {
            this.sleepy++;
        }, 8000)
    }
    addBoredom(){
        setInterval(() => {
            this.bored++;
        }, 9000)
    }
    addAge(){
        setInterval(() => {
            this.age++
        }, 1000)
    }
}
const newPet = new Pet();
//button eventwatch
play.addEventListener('click', () => {
    newPet.playingClick();
});
sleep.addEventListener('click', () => {
    newPet.sleepingClick()
});
feed.addEventListener('click', () => {
    newPet.feedingClick()
})


//start game
const eggHatch = () => {
    egg.style.display = 'none';
    child.style.display = 'block';
    newPet.updateAge();
    newPet.updateBoredom();
    newPet.updateHunger();
    newPet.updateSleepy();   
    newPet.addHunger();
    newPet.addBoredom();
    newPet.addSleepy();
    newPet.addAge();
}


