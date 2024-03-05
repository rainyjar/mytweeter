import React from 'react';   // type imr
import ReactDOM from 'react-dom';   // type imrd
import Root from './root/rootcomponent';


//load the component to html
let location = document.getElementById('global');  // get the id to load
ReactDOM.render(<Root></Root> , location);    // 2 param: root component, loc