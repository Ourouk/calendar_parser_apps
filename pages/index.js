import React, {useCallback, useEffect, useState} from 'react';

const Home = () => {
  const [outputText, setOutputText] = useState('');
  const [inputValues, setInputValues] = useState([]);
  const [currentInput, setCurrentInput] = useState('');

  const addInputButton = () => {
    if (currentInput.trim() !== '') { // Check if input is not empty or just whitespace
      setInputValues([...inputValues, currentInput]);
      setCurrentInput('');
    }
  };

  const handleInputChange = (e) => {
    setCurrentInput(e.target.value);
  };

  const confirmButton = () => {
    console.log([...inputValues, currentInput]);
    sendToApi();
  };

  const sendToApi = useCallback(() => {
    let urlString = "";
    for (let i = 0; i < inputValues.length; i++) {
      urlString += "\""+ inputValues[i]+"\"";
      urlString += ",";
    }
    urlString += "\""+ currentInput +"\"";

    fetch("http://127.0.0.1:5000/available_events?URL="+urlString)
        //.then((response) => response.json())
        .then((response)=> console.log(response));
  },[inputValues,currentInput]);

  return (
    <div className="bg-blue-100 p-8">
      <h1 className="text-4xl font-bold mb-4">Calendar Parser Apps</h1>
      {inputValues.map((value, index) => (
        <div key={index}>
          <input
            type="text"
            value={value}
            readOnly
            className="border border-gray-300 p-2 mb-4 rounded-md"
          />
        </div>
      ))}
      <div>
        <input
          type="text"
          value={currentInput}
          onInput={(e) => handleInputChange(e)}
          className="border border-gray-300 p-2 mb-5 rounded-md"
          placeholder="Type something..."
        />
        <button className="btn btn-primary mr-2" onClick={addInputButton}>
          Add Input
        </button>
      </div>
      <button className="btn btn-secondary" onClick={confirmButton}>
        Confirm
      </button>
    </div>
  );
};

export default Home;
