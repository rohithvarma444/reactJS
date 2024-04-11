import { useState, useCallback, useEffect } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [useSymbols, setUseSymbols] = useState(true);
  const [useLowerCase, setUseLowerCase] = useState(true);
  const [useUpperCase, setUseUpperCase] = useState(true);
  const [useNum, setUseNum] = useState(true);
  const [message, updateMessage] = useState("Copy");
  const [messageColor, updateColor] = useState("orange");

  const generatePassword = useCallback(() => {
    let charset = "";
    let newPass = "";

    if (useSymbols) charset += "!@#$%^&*()_+-=[]{}|;:,.<>?/";
    if (useLowerCase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (useUpperCase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (useNum) charset += "0123456789";

    for (let i = 0; i < length; i++) {
      newPass += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    setPassword(newPass);
  }, [length, useSymbols, useLowerCase, useUpperCase, useNum]);

  useEffect(() => {
    generatePassword();
  }, [length, useSymbols, useLowerCase, useUpperCase, useNum]);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(password);
    updateMessage("Copied");
    updateColor("green");
  };

  return (
    <div className="w-full max-w-md mx-auto rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-3xl font-bold mb-4">Password Generator</h1>
      <div className="mb-4">
        <label className="block text-sm mb-2">Password Length: {length}</label>
        <input
          type="range"
          min="8"
          max="256"
          value={length}
          onChange={(e) => setLength(parseInt(e.target.value))}
          className="rounded-lg px-3 py-2 w-full bg-gray-700 text-orange-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm mb-2">Include Symbols:</label>
        <input
          type="checkbox"
          checked={useSymbols}
          onChange={() => setUseSymbols(!useSymbols)}
          className="mr-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm mb-2">Include Lowercase Letters:</label>
        <input
          type="checkbox"
          checked={useLowerCase}
          onChange={() => setUseLowerCase(!useLowerCase)}
          className="mr-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm mb-2">Include Uppercase Letters:</label>
        <input
          type="checkbox"
          checked={useUpperCase}
          onChange={() => setUseUpperCase(!useUpperCase)}
          className="mr-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm mb-2">Include Numbers:</label>
        <input
          type="checkbox"
          checked={useNum}
          onChange={() => setUseNum(!useNum)}
          className="mr-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm mb-2">Generated Password:</label>
        <input
          type="text"
          readOnly
          value={password}
          className="rounded-lg px-3 py-2 w-full bg-gray-700 text-orange-500"
        />
      </div>
      <button
        onClick={handleCopyToClipboard}
        className={`bg-${messageColor}-500 text-white rounded-lg px-4 py-2 font-bold hover:bg-${messageColor}-600`}
      >
        {message}
      </button>
    </div>
  );
}

export default App;
