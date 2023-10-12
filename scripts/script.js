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
    let gameLink = games[0].link;
    let gamerName = games[0].author;
    let gameName = games[0].title;
    document.getElementById("link-info").href = gameLink;
    document.getElementById("text-white").innerHTML = gamerName;
    document.getElementById('cardOpen2 btn btn-outline-info').innerHTML = gameName;
});
