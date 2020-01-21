import React from 'react';
import './App.css';
import Home from './container/Home';

const tempArr = [{
  name: "Koushik Pal",
  age: 32,
  onlineStatus: true
}];

function App() {
  return (
    <div className="App" data-test="app-component">
      <Home data-test="home-component" header="Welcome to React" footer="All rights reserved." tempArr={tempArr} />
    </div>
  );
}

export default App;
