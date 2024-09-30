const header = document.querySelector("header");

const headerContainer = document.createElement("nav");
headerContainer.className = "container header-container";

const headerLeft = document.createElement("div");
headerLeft.className = "header-left";

const img = document.createElement("img");
img.src = "/logo.svg";
img.alt = "Mario's Friends Logo";
img.style.width = "50px";

const header1 = document.createElement("h1");
header1.textContent = "Mario's Friends";

headerLeft.appendChild(img);
headerLeft.appendChild(header1);

const headerRight = document.createElement("div");
headerRight.className = "header-right";

const homeButton = document.createElement("button");
homeButton.textContent = "Home";
homeButton.className = "button secondary";
homeButton.addEventListener("click", () => {
  window.location = "/";
});

headerRight.appendChild(homeButton);

headerContainer.appendChild(headerLeft);
headerContainer.appendChild(headerRight);
header.appendChild(headerContainer);
