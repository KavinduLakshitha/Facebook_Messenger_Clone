import React, { useState, useEffect } from "react";
import "./App.css";
import Message from "./Message";
import { FormControl, Button, Input, InputLabel } from "@mui/material";
import db from "./firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import FlipMove from "react-flip-move";
import SendIcon from "@mui/icons-material/Send";
import { IconButton } from "@mui/material";
import { Helmet } from "react-helmet";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  //useState = variable in ReactJS
  // useEffect = a snippet of code that runs on a condition

  useEffect(() => {
    //runs when the app component loads
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    setUsername(prompt("Pleaser enter your name"));
  }, []); // condtion

  console.log(input);
  console.log(messages);

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    // setMessages([...messages, { username: username, text: input }]);
    setInput("");
  };

  return (
    <div className="App">
      <div className="container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Messenger-ish</title>
        </Helmet>
        <img
          className="app__image"
          src="https://www.freepnglogos.com/uploads/facebook-messenger-png/file-facebook-messenger-logo-svg-wikipedia-9.png"
          alt=""
          width="100px"
        />
        <h1 className="h1__title">Messenger-Ish-Application🧬</h1>
        <form className="app__form">
          <FormControl className="app__formControl">
            <input
              className="app_input"
              placeholder="Enter a message..."
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
            <IconButton
              className="app_iconButton"
              variant="contained"
              type="submit"
              onClick={sendMessage}
              disabled={!input}
              color="primary"
            >
              <SendIcon />
            </IconButton>
          </FormControl>
        </form>
        <FlipMove>
          {messages.map(({ id, message }) => (
            <Message key={id} username={username} message={message} />
          ))}
        </FlipMove>
      </div>
    </div>
  );
}

export default App;
