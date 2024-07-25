const debug = (store) => (next) => (action) => {
  // La fonction next nous permet de laisser passer l'action au prochain middleware / reducer
  next(action);
};

export default debug;