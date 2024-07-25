import React, { useEffect } from 'react';
import './chatroom.scss';
import Messages from '../message/Messages';
import Form from '../form/Form';
import Settings from '../setings';
import { useDispatch } from 'react-redux';
import { wsConnect } from '../../actions';

const ChatRoom = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wsConnect());
  }, []);

  return (
    <div className='chatroom'>
      <Settings />
      <Messages />
      <Form />
    </div>
  );
};

export default ChatRoom;