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