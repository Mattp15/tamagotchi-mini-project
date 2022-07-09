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
    egg.style.display = 'block';
    setTimeout(() => {
        eggHatch();
    }, 5000);
}

class Pet {
    constructor(name){
        this.name = name;
        this.hunger = 1;
        this.bored = 2;
        this.sleepy = 0;
        this.age = 0;
    }
    isDead(){//function invoked from update function, ends game 
            document.querySelector('main').style.display = "none";
            playerTitle.style.marginLeft = '200px';
            playerTitle.innerText = 'YOUR PET HAS DIED';
    }
    feedingClick(){//feeding function tied to "feeding button" event listener
        
            this.sleep += 2;
            this.hunger = 0;
            console.log(this.hunger);
        
        eating.style.display = "block";
        setTimeout(() => {eating.style.display = "none"}, 2000);
    }
    sleepingClick(){//sleep function tied to "sleep button" event listener
        this.hunger += 1;
        this.sleepy = 0;
        sleepingGif.style.display = "block";
        document.querySelector('html').style.backgroundColor = 'black';
        setTimeout(() => {
            sleepingGif.style.display = "none";
            document.querySelector('html').style.backgroundColor = '';
        }, 2000);
    
    }
    playingClick(){//play function tied to "play button" event listener
        if (this.bored <= 1){
            this.sleepy ++;
            this.hunger ++;
        }
        this.bored = 0;
        playing.style.display = "block";
        setTimeout(() => {playing.style.display = "none"}, 2000);
    }
    updateStats(){//interval to update css to js values
        setInterval(() => {
            hungerStat.innerText = this.hunger;
            if (this.hunger > 10){
                this.isDead();
            }
        }, 500);
        setInterval(() => {
            boredomStat.innerText = this.bored;
        if (this.bored > 10){
            this.isDead();
        }}, 500);
        setInterval(() => {
            sleepStat.innerText = this.sleepy;
        if (this.sleepy > 10){
            this.isDead();
        }}, 500);
        setInterval(() => {
            ageStat.innerText = this.age;
            console.log(this.age, "1st")
            if (this.age >= 21){
                console.log(this.age, "3rd");
                child.style.display = 'none';
                adult.style.display = "block";
                
                playerTitle.innerText = "YOU SUCCUSSFULLY RAISED YOUR SHARK"
                playerTitle.style.marginLeft = '-200px';
                setTimeout(() => {
                document.querySelector('main').style.display = "none";
                }, 5000);
            }else if (this.age >= 12){
                console.log(this.age, "2nd");
                baby.style.display = "none";
                child.style.display = "block";
            }
        }, 500)
    }
    addStats(){//intervols to increase stat's
        setInterval(() => {
            this.hunger++;
        }, 6000)

        setInterval(() => {
            this.sleepy++;
        }, 5000)

        setInterval(() => {
            this.bored++;
        }, 6000)
    
        setInterval(() => {
            this.age++
        }, 5000)
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
    baby.style.display = 'block';
    newPet.updateStats();   
    newPet.addStats();
}


