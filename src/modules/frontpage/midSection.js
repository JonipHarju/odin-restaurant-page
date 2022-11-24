export function midSection() {
  const content = document.querySelector("#content");

  // created midsection div under the content div
  const midSection = document.createElement("div");
  midSection.setAttribute("id", "midSection");
  content.appendChild(midSection);

  //created infoContainer div inside midSection
  const infoContainer = document.createElement("div");
  infoContainer.setAttribute("id", "infoContainer");
  midSection.appendChild(infoContainer);

  // created infoSectionHeader inside infoContainer
  const infoSectionHeader = document.createElement("h2");
  infoSectionHeader.setAttribute("id", "infoSectionHeader");
  infoSectionHeader.innerHTML =
    "Best damn GONUTZ in the Galaxy!!! <br> - Barack Obama...";
  infoContainer.appendChild(infoSectionHeader);

  // created infoSectionHeader2 inside infoContainer
  const infoSectionHeader2 = document.createElement("h3");
  infoSectionHeader2.setAttribute("id", "infoSectionHeader2");
  infoSectionHeader2.innerHTML = "Probably..?";
  infoContainer.appendChild(infoSectionHeader2);

  // created infoSectionHeader3 inside infoContainer
  const infoSectionHeader3 = document.createElement("h4");
  infoSectionHeader3.setAttribute("id", "infoSectionHeader3");
  infoSectionHeader3.innerHTML = "..If he tasted them... :(";
  infoContainer.appendChild(infoSectionHeader3);
}
