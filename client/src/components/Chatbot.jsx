import React, { useState, useEffect } from 'react';
import './chatbot.css'; // Import the corresponding CSS file
import { chatbot } from '../utils/chatbot';

const Chatbot = () => {
  const [displayText, setDisplaytext] = useState(chatbot.greeting);
  const [isOpen, setIsOpen] = useState(false);

  // const scrollToBottom = () => {
  //   messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  // };

  useEffect(() => {
    setTimeout(() => {
      !isOpen && toggleChatbox();
    }, 5000);
  }, []);

  const changeText = (e) => {
    setDisplaytext(chatbot.conversationFlow[e.target.value]);
  };

  const toggleChatbox = () => {
    setIsOpen(!isOpen);
  };

  const closeChatbox = () => {
    setIsOpen(false);
  };

  return (
    <div className={`chatbox-container ${isOpen ? '' : 'open-container'}`}>
      {isOpen && <div className='chatbox-header'> Chat Buddy </div>}
      {isOpen && (
        <React.Fragment>
          <div
            className={`close-chat-icon ${isOpen ? '' : 'chat-open'}`}
            onClick={closeChatbox}
          >
            x
          </div>
          <div className='chatbox-content'>
            <div className='chatbox-text'>{displayText}</div>
            <div className='chatbox-buttons'>
              {chatbot.chatOptions.map((option) => {
                return (
                  <button
                    key={option}
                    value={option}
                    onClick={(e) => {
                      changeText(e);
                    }}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>
        </React.Fragment>
      )}
      <div
        className={`chat-btn ${isOpen ? 'chat-open' : 'chat-closed'}`}
        onClick={toggleChatbox}
      ></div>
    </div>
  );
};

export default Chatbot;
