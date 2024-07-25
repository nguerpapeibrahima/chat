import { SEND_MSG_WS, WS_CONNECT, saveMsgWs } from "../actions";
import io from 'socket.io-client'; 

let socket;

const websocket = (store) => (next) => (action) => {
  switch (action.type) {
    case WS_CONNECT: {
      if (!socket) {
        
        socket = io('http://localhost:3001'); 
        
        console.log('WebSocket connected');

        
        socket.on('send_message', (message) => {
          store.dispatch(saveMsgWs(message));
        });

    
        socket.on('disconnect', () => {
          console.log('WebSocket disconnected');
          socket = null;
        });
      }
      break;
    }

    case SEND_MSG_WS: {
      const { user, messageValue } = store.getState();
      if (socket) {
        socket.emit('send_message', {
          author: user,
          content: messageValue,
        });
      } else {
        console.warn('WebSocket is not connected');
      }
      break;
    }

    default:
      break;
  }

  return next(action);
};

export default websocket;