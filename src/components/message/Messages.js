import React from 'react';
import Message from './Message';
import './message.scss';
import { useSelector } from 'react-redux';

const Messages = () => {
    const messages = useSelector((state) => state.messages);
  return (
    <ul className='messages'>
      {
        messages.map((message) => <Message {...message} key={message.id} /> )
      }
    </ul>
  );
}

export default Messages;
