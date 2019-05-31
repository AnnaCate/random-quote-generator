/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
By: Anna Fulton
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

const quotes = [
{
  quote: "Don't trust anything you read on the Internet.",
  source: "Harriet Beecher Stowe",
  citation: "Wikipedia"
}, 
{
  quote: "How unspeakably the lengthening of memories in common endears our old friends!",
  source: "George Eliot",
  year: 1999
},
{
  quote: "The lowest and vilest alleys of London do not present a more dreadful record of sin than does the smiling and beautiful countryside.",
  source: "Arthur Conan Doyle"
},
{
  quote: "We seldom speak of the virtue which we have, but much oftener of that which we lack.",
  source: "Oliver Goldsmith"
},
{
  quote: "It is possible to be below flattery as well as above it.",
  source: "Thomas Babington"
}];

const getRandomQuote = () => {
  const num = quotes[Math.floor(Math.random() * quotes.length)];
  return num;
}

const printQuote = () => {
  const randomQuote = getRandomQuote();

  let htmlString = `<p class="quote">${randomQuote.quote}</p><p class="source">${randomQuote.source}`;
  if (randomQuote.citation) {
    htmlString = `${htmlString}<span class="citation">${randomQuote.citation}</span>`;
  }
  if (randomQuote.year) {
    htmlString = `${htmlString}<span class="year">${randomQuote.year}</span>`;
  }
  htmlString = `${htmlString}</p>`;

  const div = document.getElementById('quote-box');
  div.innerHTML = htmlString;
}

document.getElementById('loadQuote').addEventListener("click", printQuote, false);