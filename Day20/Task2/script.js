let form = document.getElementById("dictform");
let wordInput = document.getElementById("wordinput");
let wordInfo = document.getElementById("meaningforward");

// Create a function to handle displaying errors
function displayError(message) {
  wordInfo.innerHTML = `<p class="text-danger">${message}</p>`;
}

// Create a function to display the word's meaning
function displayWordMeaning(data) {
  let meanings = data[0].meanings;
  let audioSource = data[0].phonetics[0].audio.toString();

  let paragraph = document.createElement("div");
  let list = document.createElement("ul");
  list.style.marginBottom = "40px";
  list.style.listStyleType = "none";

  for (let partOfSpeech of meanings) {
    let listItem = document.createElement("li");
    listItem.innerHTML = `PartOfSpeech: <b>${partOfSpeech.partOfSpeech}</b> <br>`;

    let subList = document.createElement("ol");
    subList.setAttribute("style", "font-style: italic");

    for (let definition of partOfSpeech.definitions) {
      let subListItem = document.createElement("li");
      subListItem.innerHTML = `${definition.definition}`;
      subList.appendChild(subListItem);
    }

    listItem.appendChild(subList);
    list.appendChild(listItem);
  }

  wordInfo.innerHTML = "";
  paragraph.innerHTML = `
    <i class="fa-solid fa-volume-high text-warning" id="audio-icon"></i>
    <audio id="audio">
      <source src=${audioSource} type='audio/mpeg'>
    </audio>
    Word: <b>${data[0].word}</b>
    <br>
  `;

  wordInfo.appendChild(paragraph);
  wordInfo.appendChild(list);

  document.getElementById("audio-icon").addEventListener("click", () => {
    document.getElementById("audio").play();
  });
}

// Create an async function to fetch the meaning of a word
async function getMeaning(word) {
  try {
    let response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );

    if (!response.ok) {
      throw new Error('Word not found');
    }

    let data = await response.json();
    displayWordMeaning(data);
  } catch (error) {
    displayError(`Error fetching the meaning: ${error.message}`);
  }
}

// Use event delegation for both the form submit and button click
document.addEventListener("click", (event) => {
  if (event.target.id === "buttonSearch" || event.target.type === "submit") {
    event.preventDefault();
    let word = wordInput.value;

    if (word.trim() !== "") {
      getMeaning(word);
      wordInput.value = "";
    } else {
      displayError("Please enter a valid word.");
    }
  }
});
