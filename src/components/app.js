import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import {Route} from 'react-router-dom';
import Home from './home';
import Chat from './chat';
import SetName from './set_name';




const App = () => (
    <div className = 'container blue-grey lighten-5'>
        <Route path = '/' exact component = {Home}/>
        <Route path = '/chat' component = {Chat}/>
        <Route path ='/set-name' component = {SetName}/>
    </div>
);

export default App;
