import React, { useState, useEffect } from "react";
import "./App.css";
import Message from "./Message";
import { FormControl, Button, Input, InputLabel } from "@mui/material";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { username: "kavindu", text: "hello" },
    { username: "pasan", text: "yo whats up" },
  ]);
  const [username, setUsername] = useState("");

  //useState = variable in ReactJS
  // useEffect = a snippet of code that runs on a condition

  useEffect(() => {
    setUsername(prompt("Pleaser enter your name"));
  }, []); // condtion

  console.log(input);
  console.log(messages);

  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, { username: username, text: input }]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>Hello🚀</h1>

      <form>
        <FormControl>
          <InputLabel>Enter a message...</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button
            variant="contained"
            type="submit"
            color="primary"
            onClick={sendMessage}
            disabled={!input}
          >
            Send Message
          </Button>
        </FormControl>
      </form>

      {messages.map((message) => (
        <Message username={username} message={message} />
      ))}
    </div>
  );
}

export default App;
