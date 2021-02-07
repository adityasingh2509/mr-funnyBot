const button = document.getElementById('id-button');
const audioElement = document.getElementById('audio');
const jokeTextBubble = document.getElementById('id-bubble');

// function test() {
//     VoiceRSS.speech({
//         key: '502ec5ac89c84b0e929d5251d0bbd5b8',
//         src: 'Hello, world!',
//         hl: 'en-us',
//         v: 'Linda',
//         r: 0,
//         c: 'mp3',
//         f: '44khz_16bit_stereo',
//         ssml: false
//     });
// }

// test();

// Receive Jokes from Joke API
async function getJokes() {
    let joke = '';
    const apiUrl = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';

    try {
        const response = await fetch(apiUrl)
        const data = await response.json();
        if (data.setup) {
            joke = `${data.setup} .... ${data.delivery}`;
        } else {
            joke = data.joke;
        }
        console.log(joke);

    } catch (error) {
        // Catch Error
        console.log("Oops!", error);
    }
}

getJokes();