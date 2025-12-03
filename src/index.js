import lasagnaImage from "./lasagna.jpg";

const home_cont = document.querySelector("#content");
const image = document.createElement("img");
image.src = lasagnaImage;
home_cont.appendChild(image);
console.log(home_cont);
