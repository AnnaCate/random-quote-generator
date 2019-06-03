/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
By: Anna Fulton
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

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

let copy = [];

const getRandomQuote = (arr) => {
  if (copy.length < 1) {
    copy = [...arr];
  }

  const randomNum = Math.floor(Math.random() * copy.length);
  const quote = copy[randomNum];
  copy.splice(randomNum, 1);

  return quote;
}

const printQuote = (arr) => {
  const randomQuote = getRandomQuote(arr);
  const quote = randomQuote.quote;
  const source = randomQuote.source;
  const citation = randomQuote.citation;
  const year = randomQuote.year;
  let htmlString;

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

  // Append closing p tag & put it on the page:
  document.getElementById('quote-box').innerHTML = `${htmlString}</p>`;
}

const getRandomColor = () => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const changeBackgroundColor = () => {
  document.body.style.backgroundColor = getRandomColor();

  const body = document.querySelector('body');
  const btn = document.querySelector('button');
  const bg = body.style.backgroundColor;
  btn.style.backgroundColor = bg;

  btn.addEventListener('mouseenter', () => {
    btn.style.backgroundColor = 'rgba(255,255,255,.25)';
  })
  btn.addEventListener('mouseleave', () => {
    btn.style.backgroundColor = bg;
  })
}

const changeQuoteAndColor = () => {
  printQuote(quotes);
  changeBackgroundColor();
}

document.getElementById('loadQuote').addEventListener("click", changeQuoteAndColor, false);

window.setInterval(changeQuoteAndColor, 30000);