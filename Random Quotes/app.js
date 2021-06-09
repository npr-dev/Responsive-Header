let quotes = [
'Tell me and I forget. Teach me and I remember. Involve me and I learn.Benjamin Franklin',
  'Whoever is happy will make others happy too. Anne Frank',
  'The greatest glory in living lies not in never falling, but in rising every time we fall. Nelson Mandela',
  'Life is either a daring adventure or nothing at all. Helen Keller'
];

function displayQuote()  {
  let selected = Math.floor(Math.random()*quotes.length);

let quote = `<div class="card">
<img src="quote.png">
<p>${quotes[selected]}</p>
<img src="quote.png">
</div>` ;

let div = document.querySelector('#quote');
div.innerHTML = quote;
}
let button = document.querySelector('.btn');
button.addEventListener('click', displayQuote);