import {useState} from 'react'
import Text from './components/Text'
import Button from './components/Button'
import Author from './components/Author'
import Tweeting from './components/Tweeting'

function App() {
  const quotes = [
    {
      text: "You only live once, but if you do it right, once is enough.",
      author: "Mae West"
    },
    {
      text: "In three words I can sum up everything I've learned about life: it goes on.",
      author: "Robert Frost"
    },
    {
      text: "It is better to be hated for what you are than to be loved for what you are not.",
      author: "Andre Gide"
    },
    {
      text: "Good friends, good books, and a sleepy conscience: this is the ideal life.",
      author: "Mark Twain"
    },
    {
      text: "Sometimes the questions are complicated and the answers are simple.",
      author: "Dr. Seuss"
    },
    {
      text: "Life isn't about finding yourself. Life is about creating yourself.",
      author: "George Bernard Shaw"
    },
    {
      text: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
      author: "Albert Einstein"
    },
    {
      text: "Things change. And friends leave. Life doesn't stop for anybody.",
      author: "Stephen Chbosky"
    },
    {
      text: "We are what we pretend to be, so we must be careful about what we pretend to be.",
      author: "Kurt Vonnegut"
    },
    {
      text: "Be the change that you wish to see in the world.",
      author: "Mahatma Gandhi"
    },
    {
      text: "In three words I can sum up everything I've learned about life: it goes on.",
      author: "Robert Frost"
    },
    {
      text: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
      author: "J.K. Rowling"
    },
    {
      text: "If you tell the truth, you don't have to remember anything.",
      author: "Mark Twain"
    },
    {
      text: "Friendship ... is born at the moment when one man says to another 'What! You too? I thought that no one but myself . . .' ",
      author: "C.S. Lewis"
    },
    {
      text: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
      author: "Maya Angelou"
    },
    {
      text: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
      author: "Mahatma Gandhi"
    },
    {
      text: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
      author: "Martin Luther King Jr."
    },
    {
      text: "Do what is right, not what is easy nor what is popular.",
      author: "Roy T. Bennett"
    },
    {
      text: "The future depends on what you do today.",
      author: "Mahatma Gandhi"
    },
    {
      text: "Let today be the day…You look for the good in everyone you meet and respect their journey.",
      author: "Steve Maraboli"
    },
    {
      text: "You are what you do, not what you say you'll do.",
      author: "Carl Gustav Jung"
    },
    {
      text: "To believe in something, and not to live it, is dishonest.",
      author: "Mahatma Gandhi"
    },
    {
      text: "Whatever you do will be insignificant, but it is very important that you do it.",
      author: "Mahatma Gandhi"
    }
  ];
  let num = Math.floor(Math.random() * (quotes.length -1));
  const [quote, setQuote] = useState(quotes[num]);

  // Drawing a quote
  let newNum;
const drawQuote = () => {
  newNum = Math.floor(Math.random() * (quotes.length -1));
  if(quote.author === quotes[newNum].author){
    drawQuote();
  }else{
    setQuote(quotes[newNum]);
  }
};

  return (
    <div id='quote-box'>
      <div id='border1' className='border'></div>
      <div id='border2' className='border'></div>
      <div id='border3' className='border'></div>
      <div id='border4' className='border'></div>
      <Text text={quote.text} />
      <Author text={quote.author}/>
      <Button onClick={drawQuote}/>
      <Tweeting />
    </div>
  );
}

export default App;
