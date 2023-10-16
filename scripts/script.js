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
  for (let i = 0; i < games.length; i++) {
    sendGames(i);
  }
});


function sendGames(num) {
  let gameLink = games[num].link;
  let gamerName = games[num].author;
  let gameName = games[num].title;
  
  let card = document.getElementsByClassName("card-body");
  
  card[num].getElementsByTagName("a")[0].href = gameLink;
  card[num].getElementsByTagName("p")[0].innerHTML = gamerName;
  card[num].getElementsByTagName("h4")[0].innerHTML = gameName;
};
