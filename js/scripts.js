const button = document.getElementById('id-button');
const audioElement = document.getElementById('audio');
const jokeTextBubble = document.getElementById('id-bubble');


// Disable/Enable Button
function toggleButton() {
    button.disabled = !button.disabled;
}


// Display Joke Text
function displayJoke(joke) {
    jokeTextBubble.innerText = joke;
}


// Receive Jokes from Joke API
async function getJokes() {
    let joke = '';
    const apiUrl = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Check if Joke received is a Single or Double Part Joke
        if (data.setup) {
            joke = `${data.setup} .... ${data.delivery}`;
        } else {
            joke = data.joke;
        }

        // Pass Joke to tellJoke() for Text to Speech API
        tellJoke(joke);

        // Display Joke Text in Speech Bubble
        displayJoke(joke);

        // Disable Button while audioElement in play
        toggleButton();

    } catch (error) {
        // Catch Error
        console.log("Oops! An Error was found.", error);
    }
}


// Passing Joke to Text to Speech API (VoiceRSS)
function tellJoke(joke) {
    VoiceRSS.speech({
        key: '49515e421e134e50ab9b40a4f375a824',
        src: joke,
        hl: 'en-ca',
        v: 'Clara',
        r: -1,
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false,
    });
}


// Event Listeners
button.addEventListener('click', getJokes);
audioElement.addEventListener('ended', toggleButton);