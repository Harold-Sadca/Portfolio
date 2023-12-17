import React, { useState, useRef, useEffect } from 'react';
import './chatbot.css'; // Import the corresponding CSS file

const Chatbot = ({ onSendMessage }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    setMessages([...messages, { text: newMessage, type: 'sent' }]);
    onSendMessage(newMessage);
    setNewMessage('');
  };

  const toggleChatbox = () => {
    setIsOpen(!isOpen);
  };

  const closeChatbox = () => {
    setIsOpen(false);
  };

  return (
    <div className={`chatbox-container`}>
      <p
        className={`close-chat-icon ${isOpen ? '' : 'chat-open'}`}
        onClick={closeChatbox}
      >
        x
      </p>
      {isOpen && (
        <React.Fragment>
          {/* Messages Container */}
          <div className='chatbox-messages'>
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.type}`}>
                {message.text}
              </div>
            ))}
            <div ref={messagesEndRef}></div>
          </div>

          {/* Input Area */}
          <div className='chatbox-input'>
            <textarea
              placeholder='Type your message...'
              value={newMessage}
              onChange={handleInputChange}
            ></textarea>
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </React.Fragment>
      )}
      <div
        className={`chat-btn ${isOpen ? 'chat-open' : ''}`}
        onClick={toggleChatbox}
      ></div>
    </div>
  );
};

export default Chatbot;
