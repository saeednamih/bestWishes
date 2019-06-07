import React from 'react';

const bestWisheContext = React.createContext({
    email:'aaaa',
    username:'',
    id:-1,
  login: (email,id,username) => { },
  logout: () => { },
  });

export default bestWisheContext;