


export const SET_MESSAGE_VALUE = 'SET_MESSAGE_VALUE';
export const setMessageValue = (value) => ({
  type: SET_MESSAGE_VALUE,
  value,
});

export const SEND_MESSAGE = 'SEND_MESSAGE';
export const sendMessage = () => ({
  type: SEND_MESSAGE,
});

export const TOGGLE = 'TOGGLE';
export const toggle = () => ({
  type: TOGGLE,
});

export const SET_SETTINGS_INPUT = 'SET_SETTINGS_INPUT';
export const setSettingsInput= (key,value) => ({
  type: SET_SETTINGS_INPUT,
  key,
  value,
});

export const LOGIN_FORM = 'LOGIN_FORM';
export const loginForm = () => ({
  type: LOGIN_FORM,
});

export const CONNECT_USER = 'CONNECT_USER';
export const connectUser = (pseudo) => ({
  type: CONNECT_USER,
  pseudo,
});

export const WS_CONNECT = 'WS_CONNECT';
export const wsConnect = () => ({
  type: WS_CONNECT,
});

export const SEND_MSG_WS = 'SEND_MSG_WS';
export const sendMsgWs  = () => ({
  type: SEND_MSG_WS,
});

export const SAVE_MSG_WS = 'SAVE_MSG_WS';
export const saveMsgWs  = (message) => ({
  type: SAVE_MSG_WS,
  message,
});