
//Global Variables.
let playerButton = document.querySelector('.classic-mode');
let cpuButton = document.querySelector('.enhanced-edition');
let resultsElement = document.querySelector('.results');
let options = document.querySelector('.options')
let classicOptions = document.querySelector('.classic-choice-field');

//Graphics variables
let ghostImg = '<img alt="ghost" src = "./assets/bear.png">';
let bearImg = '<img alt="bear" src = "./assets/bear.png">';
let officeImg = '<img alt="office" src = "./assets/job.png">';
let happyImg = '<img alt="positive-attitude" src = "./assets/positive attitude.png">';
let poisonImg = '<img alt="poison-dagger" src = "./assets/curse dagger.png">';
let scissorImg = '<img alt="scissors" src = "./assets/scissor">';
let rockImg = '<img alt="rock" src = "./assets/curse rock.png">';
let paperImg = '<img alt="paper" src = "./assets/curse paper.png">';

//Event Listeners
playerButton.addEventListener('click', function(){
    classicGame()
});
options.addEventListener('click', function(event){
    let element =event.target;
    if (element.classList.contains('classic-rematch')){
        classicGame();
    };
});
classicOptions.addEventListener('click', function(event){
    let element = event.target;
    let result = ''
    hideElement(classicOptions)
    if (element.classList.contains('rock-button')){
        result = playerGame('classicMoves', 'rock');
    } else if (element.classList.contains('paper-button')){
        result = playerGame('classicMoves', 'paper');
    } else {
        result = playerGame('classicMoves', 'scissors');
    };
    classicResultsScreen(result)
});

function classicResultsScreen(result){
    showElement(resultsElement)
    showElement(options.children[0])
    showElement(options.children[2])
    resultsElement.innerText = result
    setTimeout(() =>{menuReset()}, 8000)

}


function classicGame(){
    showElement(classicOptions);
    hideElement(playerButton);
    hideElement(cpuButton);
    hideElement(resultsElement) 
}

// cpuButton.addEventListener('click', function(event){
//     let result = CPUGame();
//     resultsElement.innerText = result
//     showElement(resultsElement)
//     setTimeout(() =>{menuReset()}, 8000)
// });

//Functions
// function CPUGame(moveSet = 'classicMoves'){
//     let CPUGame = new game()
//     return CPUGame.newCPURound(CPUGame[moveSet])
    
// };

function playerGame (moveSet = 'classicMoves', playerMove = 'paper'){
    let user = loadUser()
    let playerGame = new game(user);
    return playerGame.newPlayerRound(playerGame[moveSet], playerMove);
};

function loadUser(){
    try{
        let localWins = retrieveWinsFromStorage();
        let user = new player('Human','none',localWins);
        return user
    } catch {
         let user = new player('Human','none');
         return user
    };

};

function menuReset(){
    showElement(playerButton)
    showElement(cpuButton)
    hideElement(classicOptions)
    hideElement(resultsElement)
};

function showElement(element){
    element.classList.remove('-hidden');
};
function hideElement(element){
    element.classList.add('-hidden')
};