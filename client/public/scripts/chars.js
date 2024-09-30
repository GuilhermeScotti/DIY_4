function truncateText(text, maxLength) {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}

const renderChars = async () => {
  const response = await fetch("/chars");
  const data = await response.json();
  const mainContent = document.getElementById("main-content");
  mainContent.classList.add("grid", "gap");
  mainContent.style.gridTemplateColumns = "repeat(2, 1fr)";
  if (data) {
    data.map((char) => {
      const charCard = document.createElement("div");
      charCard.classList.add("card");

      const topContainer = document.createElement("div");
      topContainer.className = "top-container";

      const charImg = document.createElement("img");
      charImg.src = char.image;
      charImg.alt = char.name;
      charImg.style.macWidth = "100px";
      charImg.style.maxHeight = "100px";
      topContainer.appendChild(charImg);

      const bottomContainer = document.createElement("div");
      bottomContainer.className = "bottom-container";

      const charName = document.createElement("h3");
      charName.textContent = char.name;
      bottomContainer.appendChild(charName);

      const charDescription = document.createElement("p");
      charDescription.textContent = truncateText(char.description, 40);
      bottomContainer.appendChild(charDescription);

      const readMoreButton = document.createElement("a");
      readMoreButton.textContent = "Read More >";
      readMoreButton.href = `/chars/${char.id}`;
      readMoreButton.role = "button";
      bottomContainer.appendChild(readMoreButton);

      charCard.appendChild(topContainer);
      charCard.appendChild(bottomContainer);
      mainContent.appendChild(charCard);
    });
  } else {
    const errorText = document.createElement("h2");
    errorText.textContent = "No Mario Friends found :(";
    mainContent.appendChild(errorText);
  }
};

const requestedUrl = window.location.href.split("/").pop();

if (requestedUrl) {
  window.location.href = "../404.html";
} else {
  renderChars();
}
