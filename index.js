/*****************************************************************************
 * Challenge 2: Review the provided code. The provided code includes:
 * -> Statements that import data from games.js
 * -> A function that deletes all child elements from a parent element in the DOM
*/

// import the JSON data about the crowd funded games from the games.js file
import games from './games.js';
import GAMES_DATA from './games.js';

// create a list of objects to store the data about the games using JSON.parse
const GAMES_JSON = JSON.parse(GAMES_DATA)

// remove all child elements from a parent element in the DOM
function deleteChildElements(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

/*****************************************************************************
 * Challenge 3: Add data about each game as a card to the games-container
 * Skills used: DOM manipulation, for loops, template literals, functions
*/

// grab the element with the id games-container
const gamesContainer = document.getElementById("games-container");

addGamesToPage(GAMES_JSON);

// create a function that adds all data from the games array to the page
function addGamesToPage(games) {

    // loop over each item in the data
    games.map(game => {

        // add the class game-card to the list
        const test = document.createElement("div");
        test.classList.add("game-card");

        // set the inner HTML using a template literal to display some info 
        // about each game
        const info = `
            <img class = "game-img" src=${game.img} />
            <h2>${game.name}</h2>
            <p>${game.description}</p>
            <p>Backers: ${game.backers}
        `;
        test.innerHTML = info; 

        // TIP: if your images are not displaying, make sure there is space
        // between the end of the src attribute and the end of the tag ("/>")

        // append the game to the games-container
        gamesContainer.append(test);
        }
    )

}

// call the function we just defined using the correct variable
// later, we'll call this function using a different list of games


/*************************************************************************************
 * Challenge 4: Create the summary statistics at the top of the page displaying the
 * total number of contributions, amount donated, and number of games on the site.
 * Skills used: arrow functions, reduce, template literals
*/

// grab the contributions card element
const contributionsCard = document.getElementById("num-contributions");

// use reduce() to count the number of total contributions by summing the backers

const totalContributions = GAMES_JSON.reduce((total, game) => total + game.backers, 0);

// set the inner HTML using a template literal and toLocaleString to get a number with commas

contributionsCard.innerHTML = `
    ${totalContributions.toLocaleString('en-US')}
`;

// grab the amount raised card, then use reduce() to find the total amount raised
const raisedCard = document.getElementById("total-raised");

const totalRaised = GAMES_JSON.reduce((total, game) => total + game.pledged, 0).toLocaleString('en-US');

// set inner HTML using template literal

raisedCard.innerHTML = `$${totalRaised}`;

// grab number of games card and set its inner HTML
const gamesCard = document.getElementById("num-games");

gamesCard.innerHTML = `${GAMES_JSON.length}`

/*************************************************************************************
 * Challenge 5: Add functions to filter the funded and unfunded games
 * total number of contributions, amount donated, and number of games on the site.
 * Skills used: functions, filter
*/

// show only games that do not yet have enough funding
function filterUnfundedOnly() {
    deleteChildElements(gamesContainer);

    // use filter() to get a list of games that have not yet met their goal
    const unfunded = GAMES_JSON.filter(game => game.pledged < game.goal)

    // use the function we previously created to add the unfunded games to the DOM
    addGamesToPage(unfunded);
    console.log(unfunded.length);
}

// show only games that are fully funded
function filterFundedOnly() {
    deleteChildElements(gamesContainer);

    // use filter() to get a list of games that have met or exceeded their goal
    const funded = GAMES_JSON.filter(game => game.pledged >= game.goal)

    // use the function we previously created to add unfunded games to the DOM
    addGamesToPage(funded);
    console.log(funded.length);
}

// filterUnfundedOnly();
// filterFundedOnly();

// show all games
function showAllGames() {
    deleteChildElements(gamesContainer);

    // add all games from the JSON data to the DOM
    addGamesToPage(GAMES_JSON);
}

// select each button in the "Our Games" section
const unfundedBtn = document.getElementById("unfunded-btn");
const fundedBtn = document.getElementById("funded-btn");
const allBtn = document.getElementById("all-btn");

// add event listeners with the correct functions to each button
unfundedBtn.addEventListener("click", filterUnfundedOnly);
fundedBtn.addEventListener("click", filterFundedOnly);
allBtn.addEventListener("click", showAllGames);

/*************************************************************************************
 * Challenge 6: Add more information at the top of the page about the company.
 * Skills used: template literals, ternary operator
*/

// grab the description container
const descriptionContainer = document.getElementById("description-container");

// use filter or reduce to count the number of unfunded games

const numUnfunded = GAMES_JSON.reduce((num, game) => {
    if (game.pledged < game.goal) {
        return num + 1;
    } else {
        return num;
    }
}, 0);
console.log(numUnfunded);

// create a string that explains the number of unfunded games using the ternary operator
const numUnfundedString = `A total of $${totalRaised} has been raised for ${GAMES_JSON.length == 1 ? `${GAMES_JSON.length} game` : `${GAMES_JSON.length} games`}. Currently, ${numUnfunded == 1 ? `${numUnfunded} game remains` : `${numUnfunded} games remain`} unfunded. We need your help to fund these amazing games!`

// create a new DOM element containing the template string and append it to the description container
const unfundedDescription = document.createElement("p");
unfundedDescription.innerHTML = numUnfundedString;
descriptionContainer.append(unfundedDescription);

/************************************************************************************
 * Challenge 7: Select & display the top 2 games
 * Skills used: spread operator, destructuring, template literals, sort 
 */

const firstGameContainer = document.getElementById("first-game");
const secondGameContainer = document.getElementById("second-game");

// since .sort is mutating the original GAMES_JSON array, after this part of the code is run, all funded/unfunded/allgames lists will be in funded sorted order
// if we want to retain the original order, we can use [...GAMES_JSON] to create a copy of the og array that gets mutated
// if we want the games to show up in order of funding, keep GAMES_JSON.sort ...

// const sortedGames =  [...GAMES_JSON].sort( (item1, item2) => {
const sortedGames =  GAMES_JSON.sort( (item1, item2) => {
    return item2.pledged - item1.pledged;
});

// use destructuring and the spread operator to grab the first and second games
const [one, two, ...rest] = sortedGames;

// create a new element to hold the name of the top pledge game, then append it to the correct element
const firstGame = document.createElement("p");
firstGame.innerHTML = `${one.name}`;
firstGameContainer.append(firstGame);

// do the same for the runner up item
const secondGame = document.createElement("p");
secondGame.innerHTML = `${two.name}`;
secondGameContainer.append(secondGame)

// step 3: customizations
// in css file: set hover property for buttons so that on hover, cursor turns to pointer and background becomes light gray
// also in css: 
// added a search bar + search button under Our Games 

// selects search button and adds event listener so games after filtered once search button is pressed
const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", showGamesBySearch);

// selected input field element
const inputText = document.getElementById("search-input");

// function that will clear gamesContainer and add just filtered games if their name contains the search input
function showGamesBySearch() {
    deleteChildElements(gamesContainer);

    // filters using value from input field
    const searchGames = GAMES_JSON.filter(game => game.name.toLowerCase().includes(inputText.value.toLowerCase()));
    addGamesToPage(searchGames);
}
