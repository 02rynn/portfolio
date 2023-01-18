import logo from './logo.svg';
import './App.css';
import {useNavigate, Routes, Route} from 'react-router-dom';
import Main from '../src/main/Main';
import Project from '../src/project/Project';
import AboutMe from '../src/component/AboutMe';
import Contact from '../src/component/Contact';
import Skill from '../src/component/Skill';


function App() {

  
  return (
    <div className="App">
        <Routes>
                <Route path="/" element={<Main></Main>}></Route>
                <Route path="/project" element={<Project></Project>}></Route>
                <Route path="/aboutme" element={<AboutMe></AboutMe>}></Route>
                <Route path="/Contact" element={<Contact></Contact>}></Route>
                <Route path="/Skill" element={<Skill></Skill>}></Route>
            </Routes>

    </div>
  );
}

export default App;
