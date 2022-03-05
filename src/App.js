import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './features/pages/Home/Home.js'
import MyClass from './features/pages/MyClass/MyClass.js'
import AddClass from './features/pages/AddClass/AddClass'
import AllAttendance from './features/pages/AllAttendance/AllAttendance'
import SingleStudent from './features/pages/SingleStudent/SingleStudent'
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
    <Route path="/single-student" element={<SingleStudent/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/MyClass" element={<MyClass/>}/>
      <Route path="/add-class" element={<AddClass/>}/>
      <Route path="/all-attendance" element={<AllAttendance/>}/>
      <Route path="/single-student" element={<SingleStudent/>}/>
    </Routes>
  </BrowserRouter>
     
        
        
       
    </div>
  );
}

export default App;
