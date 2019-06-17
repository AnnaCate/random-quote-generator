/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
By: Anna Fulton
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

// create array of quote objects
const quotes = [
{
  quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
  source: "James Cameron",
  tags: ['business', 'inspiration', 'success', 'failure']
}, 
{
  quote: "Leave nothing for tomorrow which can be done today.",
  source: "Abraham Lincoln",
  citation: "The Collected Works of Abraham Lincoln",
  year: "1850",
  tags: ['history', 'inspiration', 'procrastination', 'productivity']
},
{
  quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
  source: "Xun Kuang",
  citation: "Xunzi",
  year: "3rd century BCE",
  tags: ['history', 'education', 'success', 'learning', 'confucious', 'wisdom']
},
{
  quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
  source: "Robert Louis Stevenson",
  tags: ['inspiration', 'success']
},
{
  quote: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
  source: "Dr. Seuss",
  citation: "Oh, the Places You'll Go",
  year: "1990",
  tags: ['inspiration', 'success', 'future']
}];

// create empty array to track random selection of quote objects
let copy = [];

// create fn to get random quote from quotes object
const getRandomQuote = arr => {

  // if copy array is empty, populate it with all the quote objects from quotes array
  if (copy.length < 1) {
    copy = [...arr];
  }

  // select random quote object from copy of quotes array
  const randomNum = Math.floor(Math.random() * copy.length);
  const quote = copy[randomNum];

  // remove selected quote object from copy of quotes array
  copy.splice(randomNum, 1);

  return quote;
}

// create fn to print randomly selected quotes object to the webpage
const printQuote = arr => {
  // call getRandomQuote fn to select quotes object
  const randomQuote = getRandomQuote(arr);
  // define variables based on quotes object selected
  const quote = randomQuote.quote;
  const source = randomQuote.source;
  const citation = randomQuote.citation;
  const year = randomQuote.year;
  // define variable to hold the HTML string that will be written to the page
  let htmlString;

  // Set htmlString variable to include the quote and source:
  htmlString = `<p class="quote">${quote}</p><p class="source">${source}`;
  
  // Append citation if there is one:
  if (citation) {
    htmlString += `<span class="citation">${citation}</span>`;
  }

  // Append year if there is one:
  if (year) {
    htmlString += `<span class="year">${year}</span>`;
  }

  // Append closing p tag & put it on the page:
  document.getElementById('quote-box').innerHTML = `${htmlString}</p>`;
}

// create fn to get a random color
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// create fn to change the background color of the page every time a new quote is selected
const changeBackgroundColor = () => {
  // call getRandomColor fn to get a new random color
  document.body.style.backgroundColor = getRandomColor();
  // get body of document
  const body = document.querySelector('body');
  // get button from document
  const btn = document.querySelector('button');
  // create variable to store body background color
  const bg = body.style.backgroundColor;
  // set button background color to that of the body
  btn.style.backgroundColor = bg;

  // add event listeners to the button to change the color upon hovering
  btn.addEventListener('mouseenter', () => {
    btn.style.backgroundColor = 'rgba(255,255,255,.25)';
  })
  btn.addEventListener('mouseleave', () => {
    btn.style.backgroundColor = bg;
  })
}

// create fn to change both the quote and background color
const changeQuoteAndColor = () => {
  printQuote(quotes);
  changeBackgroundColor();
}

// add event listener to button to call the changeQuoteAndColor fn
document.getElementById('loadQuote').addEventListener("click", changeQuoteAndColor, false);

// set interval timer to window to change the quote and background color every 30 seconds
window.setInterval(changeQuoteAndColor, 30000);