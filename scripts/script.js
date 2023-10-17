const games = [
  {
    title: "Fun Facts",
    link: "https://panhead63.github.io/friendly-octo-guide-delta/",
    author: "Rachel Thompson",
  },
  {
    title: "Name Facts!!!",
    link: "https://rachelhoneycutt.github.io/curly-computing-machine-DELTA/",
    author: "Rachel Honeycutt",
  }  
];


$(document).ready(function(){
  let card = document.getElementsByClassName("card");
  const newCard = card[0].innerHTML;

  sendGames(0, card);


  for (let i = 1; i < games.length; i++) {
    createCard(card, newCard);
    sendGames(i, card);
  }
});


function sendGames(num, card) {
  let gameLink = games[num].link;
  let gamerName = games[num].author;
  let gameName = games[num].title;
  
  card[0].getElementsByTagName("a")[num].href = gameLink;
  card[0].getElementsByTagName("p")[num].innerHTML = gamerName;
  card[0].getElementsByTagName("h4")[num].innerHTML = gameName;
}; 


function createCard(card, newCard) { 
  let madeCards = card[0].innerHTML;

  card[0].innerHTML = madeCards + "<br>" + newCard;
};
