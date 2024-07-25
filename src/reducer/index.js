import { SET_MESSAGE_VALUE, TOGGLE, SET_SETTINGS_INPUT, CONNECT_USER, SAVE_MSG_WS, SEND_MESSAGE } from "../actions";
import getHighestId from "../components/getid";


const initialState = {
  messageValue: '',
  messages: [
    {
      id: 1,
      author: 'Papa',
      content: 'Hi, how are you doing?'
    },
  
  ],
  settings: {
    isOpen: true,
    email: '',
    password: '', 
  },
  user: 'papa',
};

function reducer(state = initialState, action = {}) {
  switch (action.type) { 
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: getHighestId(state) ,
            author: state.user,
            content: state.messageValue,
          },
        ],
        messageValue: '',
      };
    // case SAVE_MSG_WS:
    //   return {
    //     ...state,
    //     messages: [
    //       ...state.messages,
    //       {
    //         id: action.message.id,
    //         author: action.message.author,
    //         content: action.message.content,
    //       },
    //     ],
    //     messageValue: '',
    //   };  
    case SET_MESSAGE_VALUE:
      return {
        ...state,
        messageValue: action.value,
      };
    case TOGGLE:
      return {
        ...state,
        settings: {
          ...state.settings,
          isOpen: !state.settings.isOpen,
        }
      };  
    case SET_SETTINGS_INPUT:
      return {
        ...state,
        settings: {
          ...state.settings,
          [action.key]: action.value,
        }
      };  
    case CONNECT_USER: 
      return {
        ...state,
        settings:{
          ...state.settings,
          isOpen: false,
          email:'',
          password:'',
        },
      user: action.pseudo,
      } ;

    default:
      return state;
  }
}

export default reducer;
