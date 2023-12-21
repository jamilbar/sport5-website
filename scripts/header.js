
function onfunc(){
  
  let htmltext = 
`
  <button class="off-button off-button-js" onclick="offunc()">
    <div class="pin-off-icon-div">
    <img class="pin-off-icon" src="images/pin-red.png" />
    </div>
    <div class="off-text">OFF</div>
  </button>
`;



let onDiv = document.querySelector('.on-div-js');
    onDiv.innerHTML = htmltext;
    console.log(onDiv);
    document.querySelector('.header-js').classList.add('header-not-fixed');


}


function offunc(){

  let htmltext = 
`
  <button class="on-button on-button-js" onclick="onfunc()">
    <div>ON</div>
    <div class="pin-on-icon-div">
      <img class="pin-on-icon" src="images/pin-red.png" />
    </div>
  </button>
`;
let onDiv = document.querySelector('.on-div-js');

    let head = document.querySelector('.header-js');
    head.classList.remove('header-not-fixed');
    onDiv.innerHTML = htmltext;


  

}





// Get the div element by its class name
let dateDiv = document.querySelector(".date");
let dayDiv = document.querySelector(".day");
let timeDiv = document.querySelector('.time');


// Use the Date object to get the current date
var today = new Date();

// Format the date as a string (YY.MM.DD)
var dateString =
  formatNumber(today.getDate()) + "." + 
  formatNumber(today.getMonth() + 1) + "." + 
  formatNumber(today.getFullYear() % 100);
  var timeString =
  formatNumber(today.getHours()) + ":" + formatNumber(today.getMinutes());

// Set the formatted date as the content of the div
dateDiv.textContent = dateString;
timeDiv.textContent = timeString;
dayDiv.textContent = dateString;


// Function to add leading zero to single-digit numbers
function formatNumber(num) {
  return num < 10 ? "0" + num : num;
}






function onemoreresult(){
  const othergames = `<div class = "other-games">
    <div class="game1">
      <div class="game-time">20.12 20:00</div>
      <div class="game-score">מכבי חיפה - מס. אשדוד</div>
    </div>
    <div class="game2">
      <div class="game-time">20.12 20:00</div>
      <div class="game-score">הפועל באר שבע - מכבי תל אביב</div>
    </div>
    <div class="game3">
      <div class="game-time">20.12 19:00</div>
      <div class="game-score">בני סכנין - הפועל חיפה</div>
    </div>
  </div>`


  let elem = document.querySelector('.all-games');
  elem.classList.add('other-games');
  elem.innerHTML = othergames;

}


function reversegames(){
  const prevgames = `      <div class="all-games">
  <div class="game1">
    <div class="game-time">Q4</div>
    <div class="game-score">הפועל כפר קאסם 78 - 101 עירוהי רעננה</div>
  </div>
  <div class="game2">
    <div class="game-time">מחצית</div>
    <div class="game-score">הפועל כפר סבא 0 - 1 מכבי הרצליה</div>
  </div>
  <div class="game3">
    <div class="game-time">הסתיים</div>
    <div class="game-score">מכבי פתח תקווה 4 - 0 הפועל חיפה</div>
  </div>
</div>`;
  let elem = document.querySelector('.all-games');
  elem.classList.remove('other-games');
  elem.innerHTML = prevgames;
}

