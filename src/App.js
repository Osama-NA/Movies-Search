import './App.scss';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import { Search } from './pages/Search';
import { Bookmarked } from './pages/Bookmarked';

function App() {
  return (
    <BrowserRouter basename="Router">
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" component={Search} exact />
          <Route path="/Search" component={Search} />
          <Route path="/Bookmarked" component={Bookmarked} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

