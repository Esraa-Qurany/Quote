var quotes = 
[
  {
    quote : '“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”',
    writerQuote : '― Martin Luther King Jr.'
  },
  {
    quote : '“Always forgive your enemies; nothing annoys them so much.”',
    writerQuote : '― Oscar Wilde'
  },
  {
    quote : '“I have learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”',
    writerQuote : '― Maya Angelou'
  },
  {
    quote : '“Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .”',
    writerQuote : '― C.S. Lewis.'
  },
  {
    quote : '“In three words I can sum up everything I have learned about life: it goes on.”',
    writerQuote : '― Robert Frost'
  }
]
function newQuote(){
    var random = Math.floor(Math.random()*quotes.length);
    
    document.getElementById('quotes').innerHTML = quotes[random].quote;
    document.getElementById('writerQuote').innerHTML = quotes[random].writerQuote;
}