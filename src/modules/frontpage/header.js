const content = document.querySelector("#content");

export function header() {
  // create the header wrapper :)
  const header = document.createElement("div");
  header.setAttribute("id", "header");
  content.appendChild(header);

  // create the navbar
  const navbar = document.createElement("nav");
  navbar.setAttribute("id", "navbar");
  header.appendChild(navbar);

  // create  the headline
  const headline = document.createElement("h1");
  headline.setAttribute("id", "headline");
  headline.innerHTML = "GONUTZ!";
  navbar.appendChild(headline);

  // creates the list for the navbar
  const navbarList = document.createElement("ul");
  navbarList.setAttribute("id", "navbarList");
  navbar.appendChild(navbarList);

  // create array of the content we inside the menu list.  loop trough the array and input the array contents into the inner.html of the created element
  const listItemArray = ["MENU", "CATERING", "LOCATIONS", "JOBS", "CONTACT US"];
  for (let i = 0; i < listItemArray.length; i += 1) {
    const listItem = document.createElement("li");
    listItem.className = "listItem";
    listItem.id = listItemArray[i];
    listItem.innerHTML = listItemArray[i];
    navbarList.appendChild(listItem);
  }
}

//navbar event listeners below

import { clear } from "../clear/clear";
// import menu dom changes from the menu.js
import { menu } from "../menu/menu";
// add eventListener to a navbar lists menu item to change the contents of the content div
import { contacts } from "../contacts/contacts";

import { midSection } from "./midSection";
export function openMenu() {
  document.getElementById("MENU").addEventListener("click", () => {
    clear(content);
    header();
    menu();
    openFrontPage();
    openContacts();
    console.log("kukkamies");
  });
}

export function openFrontPage() {
  document.getElementById("headline").addEventListener("click", (e) => {
    console.log("kukkatäti");
    clear(content);
    header();
    midSection();
    openMenu();
    openContacts();
  });
}

export function openContacts() {
  document.getElementById("CONTACT US").addEventListener("click", (e) => {
    console.log("kukkapoika");
    clear(content);
    header();
    contacts();
    openMenu();
    openFrontPage();
  });
}
