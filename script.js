const apiURL = 'https://api.quotable.io/random'
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const newQuoteButton = document.getElementById("new-quote");
const tweetButton = document.getElementById("tweet");

async function getquote(url){
    const response = await fetch(url);
    var data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
};

function tweet(){
    window.open('https://twitter.com/intent/tweet?text=' + quote.innerHTML + "---- by " + author.innerHTML, 'Tweet Window', 'width=600, height=300'
    );
}

getquote(apiURL);

newQuoteButton.addEventListener("click", () => getquote(apiURL));
tweetButton.addEventListener("click", () => tweet());