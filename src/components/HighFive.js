import React, { useState } from 'react';

const HighFive = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (!clicked) {
      setClicked(true);
      fetch(
        '/.netlify/functions/hello',
        {
          method: 'POST',
          mode: 'no-cors',
          body: JSON.stringify(window.location.pathname),
        },
      );
    }
  };

  const thanksSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 65.6 125" overflow="visible">
      <path d="M32.8 19.6a9.8 9.8 0 100-19.6 9.8 9.8 0 000 19.6zM65.5 48l-.5-1.2c-.4-.5-.8-1-1.3-1.2L56 38.4l-7.6-14.2-.3-.7a4.7 4.7 0 00-4.3-2H21.7c-1.7-.2-3.3.7-4.2 2l-.4.7-7.7 14.2L2 45.6c-.5.3-1 .7-1.2 1.2A3.8 3.8 0 003 52.7h.3a6.8 6.8 0 003.6 9.5l11.5 5-2.4 1.2-.7.3A5.6 5.6 0 0020.1 79h.2l12.5-5.4 12.4 5.3h.1l.2.2a5.6 5.6 0 007.6-5.4c0-2-1.1-3.9-2.8-4.8l-.8-.4-2.3-1.2 11.5-5a6.9 6.9 0 003.6-9.5h.3c2-.5 3.4-2.6 2.9-4.6zm-56 1l6.8-6 3.3-5.2 1.1 16-8-4c-.9-.5-2-.8-3.1-.8zm43.3.9L46 53.3 47 39.6l2.2 3.5L56 49c-1.2 0-2.2.3-3.2.9z" />
      <ellipse cx="32.8" cy="93.1" rx="31.7" ry="6.2" />
      <text y="115" fontSize="5" fontWeight="bold" fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">Created by Scott Lewis</text>
      <text y="120" fontSize="5" fontWeight="bold" fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">from the Noun Project</text>
    </svg>
  );

  const highFiveSVG = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 125"

    >
      <path d="M84.3 81.3A46.3 46.3 0 0050 3.6a46.5 46.5 0 00-32.4 79.8l.5.3v.1l.6.2.4-.2.5-.3c5.3-4.2 6-9.3 6-13.7v-.2-.1-.2l-.1-.1V69l-.1-.2h-.1l-.1-.2H25l-.2-.2h-.2v-.1a8.7 8.7 0 01-5.7-8.2V38c0-1.2.9-2 2.2-2h.8v12a1.5 1.5 0 103 0V33.3c0-1.2 1.1-2.2 2.5-2.2h.5V48a1.5 1.5 0 103 0V31.7c0-1.2.7-2.4 2-2.4.5 0 1.1.2 1.7 1 .2.3.3.7.3 1.4V34.4c-.6.9-1 2-1 3.3V48a1.5 1.5 0 103 0V37.7c0-1.2.7-2.4 2-2.4.5 0 1.1.2 1.7 1 .2.3.3.7.3 1.4v7c-1.8.8-3 2.6-3 4.7V55a1.5 1.5 0 103 0v-5.6c0-1.2 1.1-2.3 2.4-2.3 1.3 0 2.4 1 2.4 2.3v12c0 3-2 5.1-3.7 6.4-.5.4-1.4.5-2.2.7h-.1l-.4.2c-.8 0-1.4.7-1.4 1.5v1l.2 1.9c0 5.5-.6 12-5.4 18a1.5 1.5 0 00.6 2.3 46.2 46.2 0 0036-1.2 1.5 1.5 0 00.7-2.2c-3.8-5.7-4.6-12-4.6-19.5a1.5 1.5 0 00-1.7-1.5h-.2a8.6 8.6 0 01-8.6-8.7v-3.8c0-2.8 1.8-4.5 4.6-4.5h11.9c.8 0 1.5-.7 1.5-1.5V37.9c0-1.1.6-2.3 2-2.3s2 1.2 2 2.3v7c-1.8 1-3 2.7-3 4.6V55a1.5 1.5 0 003 0v-5.5c0-1.1 1.3-2.3 2.6-2.3 1.4 0 2.7 1.1 2.7 2.3v12c0 4-3.5 7.4-7.7 7.4a7.8 7.8 0 01-7.7-7.7 1.5 1.5 0 00-3 0A10.8 10.8 0 0078 71.3c0 3.3.4 6.8 3.5 10l.3.4c.3.3.6.4 1 .4h.1c.4 0 .9-.1 1.1-.4l.3-.4zM55 50.3V38.3c0-1.3 1.4-2.2 2.6-2.2h.4v13.1c-1.1.2-2.1.7-3 1.3zm6-1.3V33.5a2.4 2.4 0 013-2.3V49h-3zm9 0h-3V31.8c0-1.1.6-2.3 2-2.3s2 1.2 2 2.3v2.9c-.6.9-1 2-1 3.2V49zm11 20.8c2.6-2 4.2-5 4.2-8.4V49.5c0-2.7-2.3-5-5.2-5.3V38c0-3-2.2-5.3-5-5.3h-1v-.8c0-3-2.2-5.3-5-5.3-1.6 0-3 .7-3.9 2-.5-.3-1.1-.4-1.7-.4A5.4 5.4 0 0058 33h-.4c-3 0-5.6 2.4-5.6 5.2v22.1c0 6 4.6 11 10.5 11.6.1 6.1.8 12.4 4.1 18.3a43.2 43.2 0 01-30.3 1.1 31 31 0 004.9-18.2l-.2-1.8c1-.2 2-.5 3-1.1 3-2.4 4.8-5.6 4.8-8.9V49.4c0-2.7-2.1-5-4.8-5.3v-6.4c0-.8 0-2-.8-3a4.8 4.8 0 00-5.2-2.2v-.8c0-.8 0-2-.8-3a4.9 4.9 0 00-8.1-.4l-1.6-.2A5.4 5.4 0 0022 33h-.8c-3 0-5.2 2.1-5.2 5v22.2c0 4.5 2.6 8.7 6.6 10.6 0 3.2-.8 6.6-3.8 9.4A43.5 43.5 0 1183 78.3c-2.1-2.6-2-5.3-2-8.5z" />
      <path d="M58.9 19.2L53.7 24a1.5 1.5 0 002 2.2l5.2-4.7a1.5 1.5 0 00-2-2.3zM49.6 14c-.8 0-1.5.7-1.5 1.5v7.2c0 .8.6 1.3 1.5 1.3.8 0 1.5-.6 1.5-1.4v-7c0-.8-.7-1.6-1.5-1.6zM40.3 19.2a1.5 1.5 0 10-2 2.2l5.1 4.8a1.5 1.5 0 002.2-.1c.5-.6.5-1.6-.1-2.1l-5.2-4.8z" />
      <text
        y="115"
        fontSize="5"
        fontWeight="bold"
        fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
      >
        Created by Justin Alexander
      </text>
      <text
        y="120"
        fontSize="5"
        fontWeight="bold"
        fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
      >
        from the Noun Project
      </text>
    </svg>
  );

  const renderButton = () => (
    <>
      Do you like it?
      <br />
      Give me a High Five!
      <br />
      <button onClick={handleClick} className="highFive__button" type="button">
        {highFiveSVG()}
      </button>
    </>
  );

  const renderThanks = () => (
    <>
      Thanks!
      <br />
      {thanksSVG()}
    </>
  );

  return (
    <div className={`highFive${clicked ? ' highFive--clicked' : ''}`}>
      {clicked ? renderThanks() : renderButton()}
    </div>
  );
};

export default HighFive;
