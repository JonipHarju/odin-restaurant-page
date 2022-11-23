export function header() {
  const content = document.querySelector("#content");

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
    listItem.innerHTML = listItemArray[i];
    navbarList.appendChild(listItem);
  }
}
