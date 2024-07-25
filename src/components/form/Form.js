import React from 'react';
import './form.scss';
import { useDispatch, useSelector } from 'react-redux';
import { sendMsgWs, setMessageValue, sendMessage } from '../../actions';

const Form = () => {
  const dispastch = useDispatch();
  const messageValue = useSelector(state=> state.messageValue );
  const handleSubmit = (event) => {
    event.preventDefault();
    dispastch(sendMessage());
    dispastch(sendMsgWs());
  }
  return (
    <form className='form' onSubmit={handleSubmit}>
      <input type='text' className='form__input' value={messageValue} onChange={(event)=> {
        dispastch(setMessageValue(event.target.value))
      }}/>
      <button type='submit' className='form__button'>&#5129;</button>
    </form>
  );
}

export default Form;
