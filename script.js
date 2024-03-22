const quotes = [
    {
        quote: `"The best way to find yourself is to lose yourself in the service of others"`
    }, {
        quote: `"If you want to live a happy life, tie it to a goal, not to people or things."`
    }, {
        quote: `"At his best, man is the noblest of all animals; separated from law and justice he is the worst."`
    }, {
        quote: `"Your time is limited, so don't waste it living someone else's life."`
    }, {
        quote: `Tell me and I forget. Teach me and I remember. Involve me and I learn."`
    }, {
        quote: `"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough"`
    }, {
        quote: `"It does not matter how slowly you go as long as you don ont stop."`
    }, {
        quote: `"Our lives begin to end the day we become silent about things that matter"`
    }, {
        quote: `"Remember that not getting what you want is sometimes a wonderful stroke of luck."`
    }, {
        quote: `"The journey of a thousand miles begins with a single step."`
    },
];

const die = document.querySelector('.die');
const advice = document.querySelector('.advice');

die.addEventListener('click', nextAdvice); 

function nextAdvice() {
    let random = Math.floor(Math.random() * quotes.length);
    advice.innerText = quotes[random].quote;
}