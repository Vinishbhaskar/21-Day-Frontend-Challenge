const quotes = [
        {
          id: 1,
          text: "The only way to do great work is to love what you do.",
          author: "Steve Jobs"
        },
        {
          id: 2,
          text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
          author: "Winston Churchill"
        },
        {
          id: 3,
          text: "Believe you can and you're halfway there.",
          author: "Theodore Roosevelt"
        },
        {
          id: 4,
          text: "In the middle of every difficulty lies opportunity.",
          author: "Albert Einstein"
        },
        {
          id: 5,
          text: "The future belongs to those who believe in the beauty of their dreams.",
          author: "Eleanor Roosevelt"
        },
        {
          id: 6,
          text: "The only limit to our realization of tomorrow will be our doubts of today.",
          author: "Franklin D. Roosevelt"
        },
        {
          id: 7,
          text: "Your time is limited, don't waste it living someone else's life.",
          author: "Steve Jobs"
        },
        {
          id: 8,
          text: "Don't watch the clock; do what it does. Keep going.",
          author: "Sam Levenson"
        },
        {
          id: 9,
          text: "Strive not to be a success, but rather to be of value.",
          author: "Albert Einstein"
        },
        {
          id: 10,
          text: "The best way to predict the future is to create it.",
          author: "Peter Drucker"
        },
        {
          id: 11,
          text: "It does not matter how slowly you go as long as you do not stop.",
          author: "Confucius"
        },
        {
          id: 12,
          text: "You are never too old to set another goal or to dream a new dream.",
          author: "C.S. Lewis"
        },
        {
          id: 13,
          text: "The future depends on what you do today.",
          author: "Mahatma Gandhi"
        },
        {
          id: 14,
          text: "The only place where success comes before work is in the dictionary.",
          author: "Vidal Sassoon"
        },
        {
          id: 15,
          text: "Success is walking from failure to failure with no loss of enthusiasm.",
          author: "Winston Churchill"
        },
        {
          id: 16,
          text: "It always seems impossible until it's done.",
          author: "Nelson Mandela"
        },
        {
          id: 17,
          text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
          author: "Nelson Mandela"
        },
        {
          id: 18,
          text: "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears.",
          author: "Chantal Sutherland"
        },
        {
          id: 19,
          text: "Life is 10% what happens to us and 90% how we react to it.",
          author: "Charles R. Swindoll"
        },
        {
          id: 20,
          text: "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
          author: "Jordan Belfort"
        },
        {
            id: 21,
            text: "Don't count the days, make the days count.",
            author: "Muhammad Ali"
          },
          {
            id: 22,
            text: "The harder I work, the luckier I get.",
            author: "Gary Player"
          },
          {
            id: 23,
            text: "Success is not the key to happiness. Happiness is the key to success.",
            author: "Albert Schweitzer"
          },
          {
            id: 24,
            text: "Don't be afraid to give up the good to go for the great.",
            author: "John D. Rockefeller"
          },
          {
            id: 25,
            text: "If you want to achieve greatness, stop asking for permission.",
            author: "Anonymous"
          },
          {
            id: 26,
            text: "The only person you should try to be better than is the person you were yesterday.",
            author: "Anonymous"
          },
          {
            id: 27,
            text: "Success is not in what you have, but who you are.",
            author: "Bo Bennett"
          },
          {
            id: 28,
            text: "The secret to getting ahead is getting started.",
            author: "Mark Twain"
          },
          {
            id: 29,
            text: "It's not about how hard you hit. It's about how hard you can get hit and keep moving forward.",
            author: "Rocky Balboa"
          },
          {
            id: 30,
            text: "The only way to do great work is to love what you do.",
            author: "Steve Jobs"
          }]


const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
};

export default getRandomQuote;      