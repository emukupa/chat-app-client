import React from 'react';
const Context = React.createContext();

export default props => (<Context.Provider value={{}}>{props.children}</Context.Provider>);