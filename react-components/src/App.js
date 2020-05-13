import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Main from './components/Main';
import CarouselContainer from './components/CarouselContainer';

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Main />
      </Route>
      <Route path="/carousel" exact>
        <CarouselContainer />
      </Route>
    </Switch>
  );
}

export default App;
