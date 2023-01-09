const btnEl = document.getElementById("btn");
const dadJokeEl = document.getElementById("dad-joke");

// Api key for the dad joke generator.
const apiKey = "82UL0p/cwP5UYOBvv239zg==Gr9RYZIRiNqHAOfv"; 

// Configure request options used as the second argument in the fetch method.
const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

// Url for the dad jokes generator api.
const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
  try {
    dadJokeEl.textContent = "Generating Dad Joke...";
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";

    // Wait for fetching of the data from the api.
    const response = await fetch(apiUrl, options);

    // Wait for the fetched data to be converted into json format.
    const data = await response.json(); 

    // console.log(data); // This shows the dad joke in the console log in the form of an array of an object.

    dadJokeEl.textContent = data[0].joke;

    btnEl.innerText = "Tell me a joke!";
    btnEl.disabled = false;
  } catch (error) {
    // Shows the error that occured in the browser.
    console.log(error); 
    dadJokeEl.textContent = "Unfortunately an error has happened, try again later.";

    btnEl.innerText = "Tell me a joke!";
    btnEl.disabled = false;
  }
}

btnEl.addEventListener("click", getJoke);
