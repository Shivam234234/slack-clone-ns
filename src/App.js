import React from 'react';
import './App.css';
import Header from './Header';
import Sliderbar from './Sliderbar';

function App() {
  return (
    //BEM naming convertion
    <div className="App">
      <h1>Shivam Make a slack  clone</h1>
      {/* header*/}
      <Header/>
      <div>
          <div className="app_body">
                    <Sliderbar />
          </div>
      {/* Siderbar*/}
      {/*React-Routre-->chat screen*/}
      </div>
    </div>
  );
}

export default App;
