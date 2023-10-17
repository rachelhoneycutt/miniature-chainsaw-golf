const games = [
  {
    title: "Fun Facts",
    link: "https://panhead63.github.io/friendly-octo-guide-delta/",
    author: "Rachel Thompson",
  },
  {
    title: "Name Facts",
    link: "https://rachelhoneycutt.github.io/curly-computing-machine-DELTA/",
    author: "Rachel Honeycutt",
  },
  {
    title: "Charlie Lab",
    link: "https://sladeberryman.github.io/charlie-376/",
    author: "Slade Berryman",
  },
  {
    title: "Delta Lab",
    link: "https://armac7.github.io/Delta-Lab/",
    author: "Ryan McDonald",
  },
  {
    title: "Centurion Charlie Lab",
    link: "https://v-sec0.github.io/centurion-charlie-lab/",
    author: "Levon Watkins",
  },
  {
    title: "Delta Lab",
    link: "https://beth-ann-tucker.github.io/silver-octo-meme-delta-lab/",
    author: "Elizabeth Tucker",
  },
  {
    title: "Spirit Animal Finder",
    link: "https://johnnycaringi.github.io/Spirit-Animal-Finder/",
    author: "Johnny Caringi",
  },
  {
    title: "Delta Lab",
    link: "https://jparker13.github.io/silver-computing-machine-DELTA/",
    author: "Janna Parker",
  },
  {
    title: "Random Facts and Spirit Animal",
    link: "https://rastifer.github.io/animated-octo-dollop-delta-jrast/",
    author: "Jacob Rast",
  },
  {
    title: "The Doge Baking Game",
    link: "https://cnorwood10.github.io/congenial-pancake-charlie-376/",
    author: "Colby Norwood",
  },
  {
    title: "Charlie Lab",
    link: "https://kaitlinrenfroe.github.io/renfroe-charlie-lab/",
    author: "Kaitlin Renfroe",
  },
  {
    title: "Charlie Lab",
    link: "https://ellarohling.github.io/bookish-umbrella-charlie-fall2023/",
    author: "Ella Rohling",
  },
  {
    title: "The Name Game",
    link: "https://bjacks01.github.io/BrandoDeltaReal/",
    author: "Brandon Jacks",
  },
  {
    title: "Doge Game",
    link: "https://lucashasting.github.io/Doge-Game/",
    author: "Lucas Hasting",
  },
  {
    title: "Delta Lab",
    link: "https://seungyeonchang.github.io/delta_lab_2023/",
    author: "Seungyeon Chang",
  },
  {
    title: "Meme Game",
    link: "https://queerinstem.github.io/Bravo-Echo/",
    author: "Melissa Hart",
  },
  {
    title: "Raiden's convert page",
    link: "https://raidengreene.github.io/namefactsdeltafall2023/",
    author: "Raiden Greene",
  },
  {
    title: "Charlie DaltRodg",
    link: "https://daltrodg.github.io/special-guide-charlie/",
    author: "Dalton Rodgers",
  },
  {
    title: "Meme Gamerz",
    link: "https://tyrepickett.github.io/Charlie-flying-pigs/",
    author: "Tyre Pickett",
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
