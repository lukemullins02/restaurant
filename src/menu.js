function menuPage(div) {
  let titles = ["Lasagna", "Ravioli", "Spaghetti", "Meatballs"];
  let descs = ["1", "2", "3", "4"];
  const menu_cont = document.createElement("div");
  menu_cont.id = "menu_cont";

  for (let i = 0; i < titles.length; i++) {
    let card = document.createElement("div");
    let title = document.createElement("p");
    let desc = document.createElement("p");
    card.classList.add("card");
    title.innerHTML = titles[i];
    desc.innerHTML = descs[i];
    card.appendChild(title);
    card.appendChild(desc);
    menu_cont.appendChild(card);
  }
  div.appendChild(menu_cont);
}

export { menuPage };
