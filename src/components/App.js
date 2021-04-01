import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Calculator from './Calculator';
import Quote from './Quote';
import Home from './Home';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/calculator" component={Calculator} />
        <Route path="/quote" component={Quote} />
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;
