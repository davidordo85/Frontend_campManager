const storage = {
  get(key) {
    const valueSession = sessionStorage.getItem(key);
    const valueLocal = localStorage.getItem(key);

    if (!valueSession && !valueLocal) {
      return null;
    }

    if(valueSession){
      return JSON.parse(valueSession);
    }else if(valueLocal) {
      return JSON.parse(valueLocal)
    }

  },

  remember(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },

  set(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value));
  },

  remove(key) {
    sessionStorage.removeItem(key);
  },
};

export default storage;
