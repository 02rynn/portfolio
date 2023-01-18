import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import {useNavigate, Routes, Route} from 'react-router-dom';
import Main from '../src/main/Main';
import Intro from '../src/component/Intro';

function App() {

  
  return (
    <div className="App">
        <Routes>
                <Route path="/" element={<Main></Main>}></Route>
                <Route path="/intro" element={<Intro></Intro>}></Route>
            </Routes>

    </div>
  );
}

export default App;
