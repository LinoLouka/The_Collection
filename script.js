const games = [
  //#1
  {
    title: "Valorant",
    année: "2 juin 2020",
    dev: "Riot Games",
    platform: ["Console, ordinateur"],
    picture: "./asset/valorant.jpeg",
    letsplay:
      "https://www.youtube.com/watch?v=2ldTyWkdOjw&pp=ygUTbGV0J3MgcGxheSB2YWxvcmFudA%3D%3D",
    genre: ["FPS"],
  },
  //#2
  {
    title: "The Legend Of Zelda : Wind Waker HD",
    année: "20 septembre 2013",
    dev: "Nintendo",
    platform: ["Wii U"],
    picture: "asset/zelda.jpg",
    letsplay:
      "https://www.youtube.com/watch?v=Lz7b27W666g&list=PLHWH_-U5CS7tMS1DjqhcEc8Ooqy_hJcjl",
    genre: ["Jeu d'action-aventure, Action-RPG"],
  },
  //#3
  {
    title: "Animal Crossing: New Horizons",
    année: "20 mars 2020",
    dev: "Nintendo",
    platform: ["Nintendo Switch"],
    picture: "asset/animal_crossing.jpg",
    letsplay:
      "https://www.youtube.com/watch?v=_SCtKXiOKZQ&list=PL9Am7fmlndZo5BoVz07pon24TLmLLeOqZ",
    genre: [
      "Jeu d'aventure, Simulation de vie, Jeu de simulation, jeu de simulation sociale",
    ],
  },
  //#4
  {
    title: "Dead By Daylight",
    année: "14 juin 2016",
    dev: "Behaviour Interactive",
    platform: [
      "PlayStation 4, PlayStation 5, Nintendo Switch, PLUS, Ordinateur",
    ],
    picture: "asset/dead_by_daylight.jpg",
    letsplay:
      "https://www.youtube.com/watch?v=Z9t_GZsEe8Y&list=PL1cXh4tWqmsGF02NudZEGOEtxe_x5Qlgn",
    genre: ["Survival horror, Jeu de combat"],
  },
  //#5
  {
    title: "Minecraft",
    année: "18 novembre 2011",
    dev: "Mojang",
    platform: ["Multiplateforme"],
    picture: "asset/minecraft.jpg",
    letsplay:
      "https://www.youtube.com/watch?v=sh6mkiL6QzE&pp=ygUabGV0J3MgcGxheSBtaW5lY3JhZnQgZmFudGE%3D",
    genre: ["Bac à sable, Aventure"],
  },
  //#6
  {
    title: "League Of Legend",
    année: "2009",
    dev: "Riot Games",
    platform: ["Ordinateur"],
    picture: "asset/lol.jpg",
    letsplay:
      "https://www.youtube.com/watch?v=89AeQnSzfl0&pp=ygUgbGV0J3MgcGxheSBsZWFndWUgb2YgbGVnZW5kcyBmciA%3D",
    genre: ["Arène de bataille en ligne multijoueur, Action-RPG"],
  },
  //#7
  {
    title: "Skyrim",
    année: "11 novembre 2011",
    dev: "Bethesda Game Studios",
    platform: [
      "Nintendo Switch, PlayStation 4, PlayStation 5, Xbox One, Xbox Series, PlayStation 3, Xbox 360, Microsoft Windows",
    ],
    picture: "asset/skyrim.jpg",
    letsplay:
      "https://www.youtube.com/watch?v=hn5gEo_BBOY&list=PLj3LVjI7cF7k-LmGKRiw6XwbU8SAtQwCF",
    genre: ["Action-RPG"],
  },
  //#8
  {
    title: "Hogwarts Legacy : L'Héritage de Poudlard",
    année: "7 février 2023",
    dev: "Avalanche Software",
    platform: [
      "PlayStation 5, PlayStation 4, Xbox Series, Xbox One, Nintendo Switch, Microsoft Windows, Android",
    ],
    picture: "asset/hogward_legacy.jpeg",
    letsplay:
      "https://www.youtube.com/watch?v=EzLIcucNeTI&pp=ygUdbGV0J3MgcGxheSBob2d3YXJ0cyBsZWdhY3kgZnI%3D",
    genre: ["Monde ouvert, Action-RPG, Récit"],
  },
  //#9
  {
    title: "Star Wars Jedi: Survivor",
    année: "28 avril 2023",
    dev: "Respawn Entertainment",
    platform: ["PlayStation 5, Xbox Series, Microsoft Windows"],
    picture: "asset/starwars.jpg",
    letsplay:
      "https://www.youtube.com/watch?v=i05L-FaDhko&pp=ygUibGV0J3MgcGxheSBzdGFyIHdhcnMgamVkaSBzdXJ2aXZvcg%3D%3D",
    genre: ["Jeu d'action-aventure, Adventure"],
  },
  //#10
  {
    title: "Roblox",
    année: "2005",
    dev: "Roblox Corporation",
    picture: "asset/roblox.png",
    platform: [
      "Android, iOS, Microsoft Windows, Xbox Series, Fire OS, Macintosh famille de systèmes d'exploitation",
    ],
    letsplay:
      "https://www.youtube.com/watch?v=T9-Wp6XTwAc&pp=ygUWbGV0J3MgcGxheSByb2Jsb3ggZG9vcg%3D%3D",
    genre: ["MMOG, sandbox"],
  },
];

//div pour le head de la page
let head_page = document.createElement("header");
main = document.getElementsByTagName("main")[0];
cards = document.getElementsByClassName("cards")[0];
main.insertBefore(head_page, cards);
//titre de la page
let head_title = document.createElement("h1");
head_title.textContent = "My game collection";
head_page.appendChild(head_title);
//sous-titre de la page (head)
let para = document.createElement("p");
para.textContent =
  "Tu veux jouer à un jeu mais tu ne sais pas lequel? Fais ton choix :";
head_page.appendChild(para);

//boucles
for (let elem of games) {
  //front cards
  let front = document.createElement("div");
  front.className = "div_cards";
  cards.appendChild(front);
  //div images
  let div_images = document.createElement("div");
  div_images.className = "div_images";
  front.appendChild(div_images);
  //images
  let images = document.createElement("img");
  images.src = elem["picture"];
  images.setAttribute("alt", "Image des jeux vidéos");
  div_images.appendChild(images);
  //name
  let names = document.createElement("h2");
  names.textContent = elem["title"];
  front.appendChild(names);
  //Div dev and year
  let dev_year = document.createElement("div");
  dev_year.className = "dev_year";
  front.appendChild(dev_year);
  //Dev
  let devs = document.createElement("p");
  devs.textContent = elem["dev"];
  devs.className = "dev";
  dev_year.appendChild(devs);
  //release year
  let year = document.createElement("p");
  year.textContent = elem["année"];
  year.className = "year";
  dev_year.appendChild(year);
  //genre of the game
  let style = document.createElement("p");
  style.textContent = elem["genre"];
  style.className = "style";
  front.appendChild(style);
  //platform
  let format = document.createElement("p");
  format.textContent = elem["platform"];
  format.className = "platform";
  front.appendChild(format);
  //Div for the icons
  let div_icons = document.createElement("div");
  div_icons.className = "div_icons";
  front.appendChild(div_icons);
  //lien vers vidéo
  let video = document.createElement("a");
  video.setAttribute("target", "_blank");
  video.href = elem["letsplay"];
  div_icons.appendChild(video);
  //image du lien cliquable
  let video_logo = document.createElement("img");
  video_logo.src = "./asset/youtube.png";
  video.appendChild(video_logo);
}
