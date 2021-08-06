const storage = {
  get(key) {
    const value = sessionStorage.getItem(key);
    // const valueSession = sessionStorage.getItem(key);
    // console.log(valueLocal,'valueLocal')
    // console.log(valueSession,'valueSession')

    if (!value) {
      return null;
    }
    
    return JSON.parse(value);
    // }else if(valueSession){
    //   return JSON.parse(valueSession)
    
    
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
