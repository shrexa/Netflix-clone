let movies = [
    {
    name: "Guns ans Gulaab",
    des:
      "Guns & Gulaabs 2023 | Maturity Rating:U/A 16+ | 1 Season | Comedies ",
      des2:
      " In the cartel-run town of Gulaabgunj, an unprecedented opium deal pulls a big-city cop and a lovesick mechanic into its chaotic clutches.Starring:Rajkummar Rao,Dulquer Salmaan,Adarsh Gourav Creators:Raj Nidimoru,Krishna D.K.",
    image: "images/Guns-and-Gulaabs.jpg"
  },
  {
    name: "Mrs. Serial Killer ",
    des:
      "Mrs. Serial Killer 2020 | Maturity Rating: U/A 16+ | 1h 47m | Thrillers",
    des2:
    " When a doctor gets jailed for a string of shocking murders, his loyal wife sets out to commit a copycat crime to prove his innocence. Starring:Jacqueline Fernandez,Manoj Bajpayee,Mohit Raina",
    image: "images/mrsSerialkiller.jpg"
  },

  {
    name: "Tu Jhoothi Mein Makkar",
    des:
      "Tu Jhoothi Mein Makkar 2023 | Maturity Rating:U/A 13+ | 2h 39m | Comedies",
      des2:
      "  To earn extra cash, Mickey helps couples break up — but life gets Starring:Ranbir Kapoor,Shraddha Kapoor,Dimple Kapadia",
    image: "images/tujhoo.jpg"
  },
  {
    name: "Shehzada ",
    des:
      "Shehzada 2023 | Maturity Rating:U/A 13+ | 2h 22m | Comedies ",
      des2:
      " After realizing he was switched at birth by a conniving father, a rakish Bantu's life is upended when he becomes the heir to a billionaire. Starring:Kartik Aaryan,Kriti Sanon,Manisha Koirala",
    image: "images/shehz.jpg"
  },
  {
    name: "What If",
    des: "What If 2023 | Maturity Rating:U/A 16+ | 1h 52m | Romance",
    des2:
    "  When a pair of newlywed musicians get trapped in a storm on their island honeymoon, they must face difficult truths that could tear their marriage apart. Starring:Alessandra de Rossi,JM de Guzman,Chard Ocampo"
,    image: "images/whatif.jpg"
  }
];
const carousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex = 0;

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  let slide = document.createElement("div");
  var imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");
  let div = document.createElement("div");

  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  div.appendChild(document.createTextNode(movies[slideIndex].des2));
  content.appendChild(h1);
  content.appendChild(p);
  content.appendChild(div);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  imgElement.src = movies[slideIndex].image;

  slideIndex++;

  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";
  div.className = "movie-des";

  sliders.push(slide);
  // sliders.push(content);
  // sliders.push(h1);
  // sliders.push(p);

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)
      }px)`;
  }
};
for (let i = 0; i < 3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 3000);

const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});

let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  });

  preBtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 200;
  });
});
