const quotes = [
    '"Whenever doubt arises, it\'s a calling to do some extra work. "',
    '"You just need to aim to be better than your yesterday self. "',
    '"Wake up everyday with the same goal and a new hope. "',
    '"You have brains in your head. You have feet in your shoes. You can steer yourself in any direction you choose. You\'re on your own, and you know what you know. And you are the guy who\'ll decide where to go. - Dr. Seuss "',
    '"How did it get so late so soon? Its night before its afternoon. December is here before its June. My goodness how the time has flewn. How did it get so late so soon? - Dr. Seuss "',
    '"Only you can control your future. - Dr. Seuss "',
    '"Give me six hours to chop down a tree and I will spend the first four sharpening the axe. - Abraham Lincoln "',
    '"Baby steps! - VNK"',
    '"Bẹpp. - My girlfriend "'
];
  
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
document.querySelector(".quote").textContent = randomQuote;