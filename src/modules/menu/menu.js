export function menu() {
  console.log("heihie");
  const content = document.querySelector("#content");

  const menuContainer = document.createElement("div");
  menuContainer.setAttribute("id", "menuContainer");
  content.appendChild(menuContainer);

  const menu = document.createElement("div");
  menu.setAttribute("id", "foodMenu");
  menuContainer.appendChild(menu);

  const menuItemArray = ["menuItem1", "menuItem2", "menuItem3"];
  for (let i = 0; i < menuItemArray.length; i += 1) {
    const listItem = document.createElement("div");
    listItem.className = "menuItem";
    listItem.id = menuItemArray[i];

    const listItemInfoContainer = document.createElement("div");
    listItemInfoContainer.className = "listItemInfoContainer";

    if (i === 0) {
      listItemInfoContainer.innerHTML = "Blue BOOM!!!! <br>3€";
    }
    if (i === 1) {
      listItemInfoContainer.innerHTML = "Wite Chocolate Gonut!! <br> 3€";
    }

    if (i === 2) {
      listItemInfoContainer.innerHTML = "PPG!!! (Pink Power GOnut!)<br> 3€";
    }

    menu.appendChild(listItem);
    listItem.appendChild(listItemInfoContainer);
  }
  const menuSectionHeader = document.createElement("h2");
  menuSectionHeader.setAttribute("id", "menuSectionHeader");
  menuSectionHeader.innerHTML = "'Epic Menu!!'<br> - Dalai Lama";
  menuContainer.appendChild(menuSectionHeader);
}
