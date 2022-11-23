import { midSection } from "./modules/midSection";
import { header } from "./modules/header";
export function initialPageLoad() {
  header();
  midSection();

  //   console.log("hei from initial page load");
  //   const content = document.querySelector("#content");
  //   // create the header wrapper :)
  //   const header = document.createElement("div");
  //   header.setAttribute("id", "header");
  //   content.appendChild(header);
  //   // create the navbar
  //   const navbar = document.createElement("nav");
  //   navbar.setAttribute("id", "navbar");
  //   header.appendChild(navbar);
  //   // create  the headline
  //   const headline = document.createElement("h1");
  //   headline.setAttribute("id", "headline");
  //   headline.innerHTML = "GONUTZ!";
  //   navbar.appendChild(headline);
  //   // creates the list for the navbar
  //   const navbarList = document.createElement("ul");
  //   navbarList.setAttribute("id", "navbarList");
  //   navbar.appendChild(navbarList);
  //   // create array of the content we inside the menu list.  loop trough the array and input the array contents into the inner.html of the created element
  //   const listItemArray = ["MENU", "CATERING", "LOCATIONS", "JOBS", "CONTACT US"];
  //   for (let i = 0; i < listItemArray.length; i += 1) {
  //     const listItem = document.createElement("li");
  //     listItem.className = "listItem";
  //     listItem.innerHTML = listItemArray[i];
  //     navbarList.appendChild(listItem);
  //   }
  //   const midSection = document.createElement("div");
  //   midSection.setAttribute("id", "midSection");
  //   content.appendChild(midSection);
  //   const infoContainer = document.createElement("div");
  //   infoContainer.setAttribute("id", "infoContainer");
  //   midSection.appendChild(infoContainer);
  //   const infoSectionHeader = document.createElement("h2");
  //   infoSectionHeader.setAttribute("id", "infoSectionHeader");
  //   infoSectionHeader.innerHTML =
  //     "Best damn GONUTZ in the Galaxy!!! <br> - Barack Obama...";
  //   infoContainer.appendChild(infoSectionHeader);
  //   const infoSectionHeader2 = document.createElement("h3");
  //   infoSectionHeader2.setAttribute("id", "infoSectionHeader2");
  //   infoSectionHeader2.innerHTML = "Probably..?";
  //   infoContainer.appendChild(infoSectionHeader2);
  //   const infoSectionHeader3 = document.createElement("h4");
  //   infoSectionHeader3.setAttribute("id", "infoSectionHeader3");
  //   infoSectionHeader3.innerHTML = "..If he tasted them... :(";
  //   infoContainer.appendChild(infoSectionHeader3);
  //   return;
}
