class VideoGame{
    title: string;
    price: number;
    rating:string;
    isDigitalOnly: boolean;
}

//test code
/*
let myGame = new VideoGame;
myGame.title = "Mario";
myGame.rating = "E";
myGame.isDigitalOnly = true;
*/


window.onload = function() {
    let addBtn =
    <HTMLElement> document.querySelector("input[type=button]"); //NOTE: DO NOT PUT SPACES, will result in null error.
    addBtn.onclick = addVideoGame;
    
}
/**
 * Clears all errors in the Validation Summary
 */
function clearAllErrors(){
    let errSummary = getById("validation-summary");
    errSummary.innerText = "";
}

function addVideoGame () {
    clearAllErrors();
    if(isAllDataValid()){
        let game:VideoGame = getVideoGame();
        displayGame(game);
    }
}

function getInputById(id: string):HTMLInputElement{
    return <HTMLInputElement>document.getElementById(id)
}

function isAllDataValid(){
    let isValid = true;

    let title = getInputById("title").value;
    if(title == "") {
        isValid = false;
        addErrorMessage("Title is required");
    }

    let price = getInputById("price").value;
    let priceValue = parseFloat(price);
    if(price == "" || priceValue == NaN) {
        isValid = false;
        addErrorMessage("Price is required and must be a number!");
    }

    let rating = (<HTMLOptionElement>getById("rating")).value;
    if(rating == "") {
        isValid = false;
        addErrorMessage("You must choose a rating!");

    }

    return isValid;
}

function addErrorMessage(errMsg: string) {
    let errorSummary = getById("validation-summary");
    let errItem = document.createElement("li");
    errItem.innerText = errMsg;
    errorSummary.appendChild(errItem);
}

function getById(id: string){
    return document.getElementById(id);
}
/**
 *  Gets all data from the form
 *  and returns it in an object.
 */
function getVideoGame(): VideoGame{
    let game = new VideoGame();

    //gets and casts the element values
    let titleInput = <HTMLInputElement>getById("title");
    game.title = titleInput.value;

    let priceInput = <HTMLInputElement>getById("price");
    game.price = parseFloat(priceInput.value);

    let ratingInput = <HTMLSelectElement>getById("rating");
    game.rating = ratingInput.value;
    
    let digitalOnly = <HTMLInputElement>getById("online");
    game.isDigitalOnly = digitalOnly.checked;

    /*if(digitalOnly.checked) {
        game.isDigitalOnly = true;
    }
    else {
        game.isDigitalOnly = false;
    } */

    return game;


}


function displayGame(myGame: VideoGame): void {
    let displayDiv = getById("display");

    //create h2 with game title
    let gameHeading = document.createElement("h2");
    gameHeading.innerText = myGame.title;

    //create paragraph with game details
    let gameInfo = document.createElement("p");
    let gameMediumDisplay = "";
    if(myGame.isDigitalOnly){
        gameMediumDisplay = "This is a digital only game";

    }
    else{
        gameMediumDisplay = "You can come buy a physical copy!";
    }
    

    gameInfo.innerText = `${myGame.title} has a rating of ${myGame.rating}.
    it costs $${myGame.price.toFixed(2)}. ${gameMediumDisplay}`;

    //add <h2> in the div display
    displayDiv.appendChild(gameHeading);
    //Add game info
    displayDiv.appendChild(gameInfo);

}

