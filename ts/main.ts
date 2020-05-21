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

function addVideoGame () {
    if(isAllDataValid()){
        let game = getVideoGame();
        displayGame(game);
    }
}

function isAllDataValid(){
    return true; //placeholder
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

}

