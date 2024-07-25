import axios from 'axios';
import { LOGIN_FORM, connectUser } from '../actions';

const api = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN_FORM: {
      const { settings: {email, password }} = store.getState();
      
      axios.post('http://localhost:3001/login', {
        email,
        password,
      })
      .then((response) => {
        store.dispatch(connectUser(response.data.pseudo));
      })
      .catch((error) => {
        console.log(error);
      });
      break;
    }

    default:
      next(action);
  }
};

export default api;
// bouclierman@herocorp.io

