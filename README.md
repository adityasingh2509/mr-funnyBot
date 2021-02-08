# Mr. FunnyBot

This Application tells random Programmer jokes when the User clicks on `Tell Me A Joke` button. The joke is played by a robotic voice and a joke-text speech bubble is displayed on screen.

APIs used in the development of this Application are:

- [VoiceRSS Text to Speech API](http://www.voicerss.org/api/)
- [JokeAPI](https://sv443.net/jokeapi/v2/)


<br>


## DEMO

### Desktop View

![Cover - Desktop Mode](images/cover.gif)

### Mobile View

![Cover - Mobile View](images/cover-mobile.gif)


<br>

---

## Skills Learned

<br>

1. Using [VoiceRSS Text to Speech API](http://www.voicerss.org/api/)
2. Using [JokeAPI](https://sv443.net/jokeapi/v2/)
3. Modification of CSS properties of `div` element to form CSS triangles.
4. Using Audio/Video Events like `ended`


<br>

---

## Process Execution

<br>

1. Receive a joke from [JokeAPI](https://sv443.net/jokeapi/v2/) using `getJokes()` function.
2. Pass the joke to [VoiceRSS Text to Speech API](http://www.voicerss.org/api/) using `tellJoke()` function to read out the joke.
3. Simultaneously to Step-2, pass joke to `displayJoke()` function to render joke-text inside speech bubble.


<br>

---

### JokeAPI 

<br>

The `async` function `getJokes()` receives the joke from the API:

#### script.js

```js
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
```

<br>

### VoiceRSS Text-To-Speech API

<br>

The `voicerss-tts.js` contains the JavaScript SDK Code for better integration with the API. It contains the `VoiceRSS Object` whose `speech` method when provided the joke-text to its `src` returns an audio.

#### script.js

```js
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
```

<br>

### Display Joke text

<br>

#### script.js
```js
// Display Joke Text
function displayJoke(joke) {
    jokeTextBubble.innerText = joke;
}
```




