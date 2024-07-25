import React from 'react';
import { useSelector } from 'react-redux';

const Message = ({author, content}) => {
  const isMine = useSelector((state) => author === state.user);
  return (
      <li className={`message ${isMine ? 'message--isMine':''}`}>
        <p className='message__author'>{author}</p>
        <p className='message__content'>{content}</p>
      </li>
  );
}

export default Message;
