let jokeBtn = document.querySelector(".btn");
let jokePara = document.getElementById("para");

const jokesGenerator = async () => {
    let myFetchJokes = await fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,explicit&type=single");
    let myJokes = await myFetchJokes.json();
    console.log(myJokes);
    jokePara.innerHTML = myJokes.joke; 

};
jokesGenerator();
jokeBtn.addEventListener("click",jokesGenerator);