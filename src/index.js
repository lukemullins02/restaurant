import { homePage } from "./home.js";
import { menuPage } from "./menu.js";
import { aboutPage } from "./about.js";

const curPage = document.querySelector("#content");
const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const aboutBtn = document.querySelector("#about");

homeBtn.addEventListener("click", () => {
  let child = curPage.lastElementChild;
  while (child) {
    curPage.removeChild(child);
    child = curPage.lastElementChild;
  }
  homePage(curPage);
});

menuBtn.addEventListener("click", () => {
  let child = curPage.lastElementChild;
  while (child) {
    curPage.removeChild(child);
    child = curPage.lastElementChild;
  }
  menuPage(curPage);
});

aboutBtn.addEventListener("click", () => {
  let child = curPage.lastElementChild;
  while (child) {
    curPage.removeChild(child);
    child = curPage.lastElementChild;
  }
  aboutPage(curPage);
});

homeBtn.click();
