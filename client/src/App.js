import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import Endpoint from './utils/Endpoint';
import './App.css';

function App() {

  const [apod, setApod] = useState({});

  useEffect(() => {
    Endpoint.getApod().then(apodData => {
      setApod(apodData.data);
    })
  }, []);

  return (
    <div style={{ maxWidth: 900, padding: 30 }}>
      <h1>NASA Picture of The Day</h1>
      <h2>PartnerHero Code Assessment</h2>
        {apod && (
          <article>
            <header>
              {apod.title} - <i>{apod.date}</i>
            </header>
            <img src={apod.url} alt="NASA" width="600" height="auto" />
            <p>{apod.explanation}</p>
            <pre style={{ overflowX: "auto",
                          whiteSpace: "pre-wrap",
                          wordWrap: "break-word" }}>
              <hr />
              {JSON.stringify(apod, null, 2)}
            </pre>
          </article>
        )}
    </div>
  );
}

export default App;
