import React, {useState, useEffect } from 'react';
import queryString from "query-string";
import io from "socket.io-client";

import { Link } from "react-router-dom";

let socket;

function ChatRoom({ location }) {
  const URL = 'http://localhost:8000';
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  useEffect(() => {
    // get the name and room from the query string
    const { name: queryName, room: queryRoom } = queryString.parse(location.search);

    // assign them to the variables;
    setName(queryName);
    setRoom(queryRoom);

    // connect to the socket
    socket = io(URL);

    socket.emit("join-room", {name: queryName, room: queryRoom}, data => {
      console.log(data);
    });

    // whenever the component un-mounts
    return () => {
      socket.emit('client-disconnect');
      //socket.off(); TBD don't know if this helps ??
    };
  }, [
    URL, location.search
  ]);
  return (
    <div style={{color: "white"}}>Chat room with {name} in room {room}</div>
  );
}

export default ChatRoom;
