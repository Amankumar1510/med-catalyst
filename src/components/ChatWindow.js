import React, { useState } from 'react';
import ChatInput from './ChatInput';
import axios from 'axios';
import ChatMessage from './ChatMessage';
import styled from 'styled-components';

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);

  const handleSend = async (message) => {
    const userMessage = { sender: 'user', text: message };
    setMessages([...messages, userMessage]);

    // Call the backend API
    const response = await axios.post('http://localhost:5000/chat', { message });
    const botMessage = { sender: 'bot', text: response.data.reply };
    setMessages([...messages, userMessage, botMessage]);
  };

  return (
    <Container>
      <MessagesContainer>
        {messages.map((msg, index) => (
          <ChatMessage key={index} sender={msg.sender} text={msg.text} />
        ))}
      </MessagesContainer>
      <ChatInput onSend={handleSend} />
    </Container>
  );
};

export default ChatWindow;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`;

const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 10px;
`;
