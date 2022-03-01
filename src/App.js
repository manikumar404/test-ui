import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './features/pages/Home/Home.js'
import MyClass from './features/pages/MyClass/MyClass.js'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path = "/" element={<Counter />} />
      <Route path="/next" element={<Home/>}/>
      <Route path="/MyClass" element={<MyClass/>}/>
    </Routes>
  </BrowserRouter>
     
        
        
       
    </div>
  );
}

export default App;
