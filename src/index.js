import React from 'react';
import ReactDOM from 'react-dom';
import ClickityClick from './components/ClickityClick';

ReactDOM.render(
    <ClickityClick />,
  document.getElementById('root')
); 

//this.setState merges the contents it is given 
//with the current state.
//It is very similar to Object.assign({}, setStateComponents...)