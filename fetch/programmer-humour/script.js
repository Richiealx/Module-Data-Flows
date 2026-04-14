const comicContainer = document.getElementById("comic-container");

async function fetchLatestComic() {
  comicContainer.innerHTML = "<p>Loading comic...</p>";

  try {
    const response = await fetch("https://xkcd.now.sh/?comic=latest");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const comicData = await response.json();
    console.log(comicData);

    renderComic(comicData);
  } catch (error) {
    console.error("Failed to fetch comic:", error);
    showError("Sorry, the comic could not be loaded. Please try again later.");
  }
}

function renderComic(comicData) {
  comicContainer.innerHTML = "";

  const title = document.createElement("h2");
  title.className = "comic-title";
  title.textContent = comicData.safe_title || "Latest XKCD Comic";

  const image = document.createElement("img");
  image.src = comicData.img;
  image.alt = comicData.alt || comicData.safe_title || "XKCD comic";

  comicContainer.appendChild(title);
  comicContainer.appendChild(image);
}

function showError(message) {
  comicContainer.innerHTML = "";

  const errorText = document.createElement("p");
  errorText.className = "error-message";
  errorText.textContent = message;

  comicContainer.appendChild(errorText);
}

fetchLatestComic();
