import React from 'react';
import Weather from './Weather';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{' '}
          <a
            href="https://www.delac.io/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Matt Delac
          </a>{' '}
          and is{' '}
          <a
            href="https://github.com/wecodeschool/react-weather-app"
            target="_blank"
            rel="noreferrer noopener"
          >
            open-sourced on GitHub
          </a>{' '}
          and{' '}
          <a
            href="https://suspicious-beaver-111c4d.netlify.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
