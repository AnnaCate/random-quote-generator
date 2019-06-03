/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
By: Anna Fulton
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

const quotes = [
{
  quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
  source: "James Cameron"
}, 
{
  quote: "Leave nothing for tomorrow which can be done today.",
  source: "Abraham Lincoln",
  citation: "The Collected Works of Abraham Lincoln",
  year: "1850"
},
{
  quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
  source: "Xun Kuang",
  citation: "Xunzi",
  year: "3rd century BCE"
},
{
  quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
  source: "Robert Louis Stevenson"
},
{
  quote: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
  source: "Dr. Seuss",
  citation: "Oh, the Places You'll Go",
  year: "1990"
}];

const getRandomQuote = () => {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

const printQuote = () => {
  const randomQuote = getRandomQuote();
  let htmlString;
  const quote = randomQuote.quote;
  const source = randomQuote.source;
  const citation = randomQuote.citation;
  const year = randomQuote.year;
  const div = document.getElementById('quote-box');

  // Set htmlString variable to include the quote and source:
  htmlString = `<p class="quote">${quote}</p><p class="source">${source}`;
  
  // Append citation if there is one:
  if (citation) {
    htmlString = `${htmlString}<span class="citation">${citation}</span>`;
  }

  // Append year if there is one:
  if (year) {
    htmlString = `${htmlString}<span class="year">${year}</span>`;
  }

  // Append closing p tag:
  htmlString = `${htmlString}</p>`;

  // Put htmlString on page:
  div.innerHTML = htmlString;
}

document.getElementById('loadQuote').addEventListener("click", printQuote, false);