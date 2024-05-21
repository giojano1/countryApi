const url = "./assets/data/data.json";
const container = document.querySelector(".main-content");
let counter = 0;
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    gen(data);
  });

function gen(box) {
  box.forEach(function (createBox) {
    const box = document.createElement("div");
    box.className = "content-box";
    container.appendChild(box);

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
}
