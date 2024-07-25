import { useDispatch, useSelector } from 'react-redux';
import './settings.scss';
import { loginForm, setSettingsInput, toggle } from '../../actions';

const Settings = () => {
  const dispatch = useDispatch();
  const { isOpen, email, passWord } = useSelector((state) => state.settings);
  const handleChange = (event) => {
    dispatch(setSettingsInput(event.target.type, event.target.value))
  }

  return (
    <div className={`settings ${!isOpen ? 'settings--closed' : ''}`} >
      <button 
        type="button" 
        className="settings__toggle" 
        onClick={() => {
          dispatch(toggle());
        }}
      >
        +
      </button>
      <form className="settings__form" onSubmit={(event) => {
        event.preventDefault();
        dispatch(loginForm());
      }} >
        <div className="field">
          <input className="field__input" type="email" placeholder="E-mail" value={email} onChange={handleChange} />
        </div>
        <div className="field">
          <input className="field__input" type="password" placeholder="Mot de passe" value={passWord} onChange={handleChange}  />
        </div>
        <button type="submit" className="settings__submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Settings;
