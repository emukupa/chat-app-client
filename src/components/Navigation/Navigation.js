import React from 'react';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/chat-room">Chat Room</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Landing;
