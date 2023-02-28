import React, { useState, useEffect } from "react"
import ReactDOM from 'react-dom'
import './index.css';


function GetQuot() {
  const [data, setData] = React.useState(null);

  async function updateQuote() {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const { statusCode, statusMessage, ...data } = await response.json();
      if (!response.ok) throw new Error(`${statusCode} ${statusMessage}`);
      setData(data);
    } catch (error) {
      console.error(error);
      setData({ content: "Opps... Something went wrong" });
    }
  }
  React.useEffect(() => {
    updateQuote();
  }, []);

  if (!data) return null;

  return (
    <div id="quote-box">
      <p id="text">{data.content}</p>
      <p id="author">{data.author}</p>
      <button id="new-quote" onClick={updateQuote}>New Quote</button>
      <a id="tweet-quote" target="_blank" href="twitter.com/intent/tweet"></a>
    </div>
  )
}
ReactDOM.render(<GetQuot />, document.getElementById('root'));