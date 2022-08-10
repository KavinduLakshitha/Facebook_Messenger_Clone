import React, { useState } from "react";
import "./App.css";
import { FormControl, Button, Input, InputLabel } from "@mui/material";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  console.log(input);
  console.log(messages);

  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, input]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>Hello🚀</h1>

      <FormControl>
        <InputLabel>Enter a message...</InputLabel>
        <Input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <Button
          variant="contained"
          type="submit"
          onClick={sendMessage}
          disabled={!input}
        >
          Send Message
        </Button>
      </FormControl>

      {messages.map((message) => {
        <p>{message}</p>;
      })}
    </div>
  );
}

export default App;
