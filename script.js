const form = document.getElementById("meme-form");
const memeContainer = document.getElementById("meme-container");

function createMeme(event) {
    event.preventDefault();

    const imageUrl = document.getElementById("image-url").value;
    const topText = document.getElementById("top-text").value;
    const bottomText = document.getElementById("bottom-text").value;

    const meme = document.createElement("div");
    meme.className = "meme";

    const memeContent = document.createElement("div");
    memeContent.className = "meme-content";

    const img = document.createElement("img");
    img.src = imageUrl;

    const topTextDiv = document.createElement("div");
    topTextDiv.className = "meme-text top-text";

    const bottomTextDiv = document.createElement("div");
    bottomTextDiv.className = "meme-text bottom-text";

    if (topText) {
        topTextDiv.textContent = topText;
        memeContent.appendChild(topTextDiv);
    }

    if (bottomText) {
        bottomTextDiv.textContent = bottomText;
        memeContent.appendChild(bottomTextDiv);
    }

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
        memeContainer.removeChild(meme);
    });

    memeContent.appendChild(img);
    meme.appendChild(memeContent);
    meme.appendChild(deleteButton);

    memeContainer.appendChild(meme);

    form.reset();
}

form.addEventListener("submit", createMeme);
