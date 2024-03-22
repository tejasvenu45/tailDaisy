
import React, { useState } from 'react';
import chatData from './chat_data.json'; 

const Home = () => {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.trim() === '') return;
    
    
    const response = chatData[userInput.toLowerCase()] || "I'm sorry, I don't understand.";
    
    setChatHistory([...chatHistory, { message: userInput, sender: 'user' }]);
    setChatHistory([...chatHistory, { message: response, sender: 'bot' }]);
    setUserInput('');
  };

  return (
    <div className=' pt-36'>
    <div className="max-w-md mx-auto bg-gray-100 p-4 rounded-lg">
      <div className="mb-4">
        <h1 className="text-lg font-semibold mb-2">Chatbot</h1>
        <div className="border border-gray-300 p-2 rounded-lg h-64 overflow-y-auto">
          {chatHistory.map((item, index) => (
            <div key={index} className={`mb-2 ${item.sender === 'user' ? 'text-right' : 'text-left'}`}>
              <div className={`inline-block px-4 py-2 rounded-lg ${item.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>
                {item.message}
              </div>
            </div>
          ))}
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none"
          placeholder="Type your message here..."
          value={userInput}
          onChange={handleUserInput}
        />
        <button type="submit" className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none">Send</button>
      </form>
    </div>
    </div>
  );
};

export default Home;
