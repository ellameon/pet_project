import React from 'react';
import './App.css';
import {MainScreen} from "./component/screen/MainScreen";

function App() {
  return <>
      <div className="card">
          <div className="card-header">
              Записная книжка
          </div>
          <MainScreen/>
      </div>


  </>
}

export default App;
