import lasagnaImage from "./lasagna.jpg";

function homePage(div) {
  const image = document.createElement("img");
  const heading = document.createElement("h1");
  const description = document.createElement("p");

  image.src = lasagnaImage;
  heading.textContent = "Lounging Lasagna";
  description.textContent =
    " Welcome to our Michelin Star rated restaurant! Choose from a wide variety of Italian Cusines from Lasagna, Spaghetti, Meatballs, Ravioli, and more. Also, choose from our selection of wines from Florence.";

  div.appendChild(image);
  div.appendChild(heading);
  div.appendChild(description);
}

export { homePage };
