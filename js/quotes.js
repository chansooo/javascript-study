const quotes =[
    {
        quote:"start where you are. Use what you have. Do what you can.",
        author:"Arthur Ashe"
    },
    {
        quote:"I can't change the direction of the wind, but I can adjust my sail to always reach my destination.",
        author:"Jimmy Dean"
    },
    {
        quote:"Acting is magical. Change yout look and your attitude, and you can be anyone.",
        author:"Alicia Witt"
    },
    {
        quote:"Life isn't about finding yourself. Life is about creating yourself.",
        author:"George Bernard Shaw"
    },
    {
        quote:"Nothing is more despicable than respect based on fear.",
        author:"Albert Camus"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;