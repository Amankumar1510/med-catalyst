import React from 'react';
import styled from 'styled-components';



const ChatMessage = ({ message }) => {
    const {sender, text} = message;

  return (
    <div>
      <Message sender={sender}>
      {/* <Text>'Some text for testing'</Text> */}
      <Text sender={sender}>{text}</Text>
    </Message>
    </div>
  );
};

export default ChatMessage;

const Message = styled.div`
  display: flex;
  justify-content: ${(props) => (props.sender === 'user' ? 'flex-end' : 'flex-start')};
  margin: 5px 0;
`;

const Text = styled.div`
  background-color: ${(props) => (props.sender === 'user' ? '#d1e7dd' : '#f8d7da')};
  color: ${(props) => (props.sender === 'user' ? '#0f5132' : '#842029')};
  padding: 10px;
  border-radius: 5px;
  max-width: 60%;
  word-wrap: break-word;
`;
