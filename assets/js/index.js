const url = "./assets/data/data.json";
const container = document.querySelector(".main-content");
const filterBtn = document.querySelector(".filter-button");
const filterBox = document.querySelector(".filter-options");
const filterAmerica = document.querySelector("#filterAmerica");
const filterAfrica = document.querySelector("#filterAfrica");
const filterAsia = document.querySelector("#filterAsia");
const filterEurope = document.querySelector("#filterEurope");
const filterOceania = document.querySelector("#filterOceania");
const filterAll = document.querySelector("#filterAll");
let boxesArr = [];

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    boxesArr = gen(data);
  });

function gen(box) {
  const boxes = [];
  box.forEach(function (createBox) {
    const box = document.createElement("div");
    box.className = "content-box";
    box.dataset.region = createBox.region;
    container.appendChild(box);
    boxes.push(box);

    const img = document.createElement("img");
    img.classList = "flag";
    img.src = createBox.flags.png;
    box.appendChild(img);

    const textBox = document.createElement("div");
    textBox.className = "content-text";
    box.appendChild(textBox);

    const countryTitle = document.createElement("span");
    countryTitle.className = "country-name";
    countryTitle.textContent = createBox.name;
    textBox.appendChild(countryTitle);

    const details = document.createElement("div");
    details.className = "details";
    textBox.appendChild(details);

    const detailOne = document.createElement("p");
    const population = document.createElement("span");
    population.className = "population";
    population.textContent = createBox.population;
    detailOne.textContent = "Population:" + " ";
    details.appendChild(detailOne);
    detailOne.appendChild(population);

    const detailTwo = document.createElement("p");
    const region = document.createElement("span");
    region.className = "region";
    region.textContent = createBox.region;
    detailTwo.textContent = "Region:" + " ";
    details.appendChild(detailTwo);
    detailTwo.appendChild(region);

    const detailThree = document.createElement("p");
    const capital = document.createElement("span");
    capital.className = "capital";
    capital.textContent = createBox.capital;
    detailThree.textContent = "Capital:" + " ";
    details.appendChild(detailThree);
    detailThree.appendChild(capital);
  });
  return boxes;
}
// filter show
filterBtn.addEventListener("click", filterBoxShow);
function filterBoxShow() {
  filterBox.classList.toggle("show");
}
function filter(reg) {
  boxesArr.forEach(function (box) {
    box.classList.remove("hide");
    if (box.dataset.region !== reg) {
      box.classList.add("hide");
    }
  });
}
function showAll() {
  boxesArr.forEach(function (box) {
    box.classList.remove("hide");
  });
}
filterAmerica.addEventListener("click", () => filter("Americas"));
filterAfrica.addEventListener("click", () => filter("Africa"));
filterEurope.addEventListener("click", () => filter("Europe"));
filterAsia.addEventListener("click", () => filter("Asia"));
filterOceania.addEventListener("click", () => filter("Oceania"));
filterAll.addEventListener("click", () => showAll());
