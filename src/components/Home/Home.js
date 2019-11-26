import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import "./Home.css";

function Home() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  const checkFields = e => {
    return (!name || !room) ? e.preventDefault() : null; 
  };

  return (
    <div className="Home">
      <h1 className="Heading">Join</h1>
      <div>
        <input
          type="text"
          placeholder="Name"
          className="Input mt-20"
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Room"
          className="Input mt-20"
          onChange={e => setRoom(e.target.value)}
        />
      </div>
      <Link onClick={e => checkFields(e) } to={`/chat-room?name=${name}&room=${room}`}>
        <button className="Button mt-20" type="submit">
          Sign In
        </button>
      </Link>
    </div>
  );
}

export default Home;
