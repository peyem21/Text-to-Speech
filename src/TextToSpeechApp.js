import React, { useState } from "react";
import "./TextToSpeechApp.css";

function TextToSpeechApp() {
  const [text, setText] = useState("");

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleSpeak = () => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    } else {
      alert("Speech synthesis is not supported in this browser.");
    }
  };

  const handleClear = () => {
    setText("");
  };

  const handleStopSpeach = () => {
    if ("speechSynthesis" in window) {
      speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  return (
    <div className="texttoSpeechapp">
      <h1>
        Text to Speech App <span> By Abdullah</span>
      </h1>
      <textarea
        rows="5"
        cols="60"
        value={text}
        onChange={handleInputChange}
        placeholder="Type text here...."
      />
      <div>
        <button onClick={handleSpeak}>Speak</button>
        <button onClick={handleClear}>Clear</button>
        <button onClick={handleStopSpeach} disabled={!isSpeaking}>
          Stop
        </button>
      </div>
    </div>
  );
}

export default TextToSpeechApp;
