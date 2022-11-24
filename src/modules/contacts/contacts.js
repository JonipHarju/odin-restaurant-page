export function contacts() {
  const content = document.querySelector("#content");

  const midSection = document.createElement("div");
  midSection.setAttribute("id", "midSection");
  content.appendChild(midSection);

  const infoContainer = document.createElement("div");
  infoContainer.setAttribute("id", "infoContainer");
  midSection.appendChild(infoContainer);

  const infoSectionHeader = document.createElement("h2");
  infoSectionHeader.setAttribute("id", "infoSectionHeader");
  infoSectionHeader.innerHTML = "Contact us if you are hungry!";
  infoContainer.appendChild(infoSectionHeader);

  const infoSectionHeader2 = document.createElement("h3");
  infoSectionHeader2.setAttribute("id", "infoSectionHeader2");
  infoSectionHeader2.innerHTML = "..Or in case of business inquiries....";
  infoContainer.appendChild(infoSectionHeader2);

  const infoSectionHeader3 = document.createElement("h4");
  infoSectionHeader3.setAttribute("id", "infoSectionHeader3");
  infoSectionHeader3.innerHTML =
    "Orders Pho: 04040249134 <br> Business inquiries: gonutz@gmail.com";
  infoContainer.appendChild(infoSectionHeader3);
}
