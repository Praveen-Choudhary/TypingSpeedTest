const setOfWords = [
    "My name is Praveen kumar Janu. I'm a Frontend Developer.",
    "My hobbies are Playing Vollyball and Teaching",
    "Here you can test your typing speed, for that type this sentence"
];

const msg = document.getElementById('msg');
const typeWords = document.getElementById('mywords');
const btn = document.getElementById('btn');

let startTime, endTime;

const playGame = ()=>{
    let randomNumber = Math.floor(Math.random()*setOfWords.length);
    msg.innerHTML = setOfWords[randomNumber];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = 'Done';
}

const endPlay = ()=>{
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime-startTime)/1000)
    console.log(totalTime);

    let totalStr = typeWords.value;
    let wordCount = wordCounter(totalStr);

    let typeSpeed =Math.round((wordCount/totalTime)*60);

    let finalMsg = "Your typing speed is "+ typeSpeed + "  words per minute. ";

    finalMsg += comapreWords(msg.innerText, totalStr);

    msg.innerText = finalMsg;
}
const comapreWords =(str1, str2)=>{
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let count = 0;

    words1.forEach(function(item,index){
        if(item == words2[index]){
            count++;
        }

        
        
    })
    let errorWords = (words1.length-count);

    return (count + "correct words out of "+ words1.length + " and total number of error are "+ errorWords);
}


const wordCounter =(str)=>{
    let response = str.split(" ").length;
    console.log(response);
    return response;
}

btn.addEventListener('click', function(){
    if(this.innerText == 'Start'){
        typeWords.disabled = false;
        playGame();

    }
    else if(this.innerText =='Done'){
        typeWords.disabled = true;
        btn.innerText = 'Start'; 
        endPlay();
         
        
    }
})