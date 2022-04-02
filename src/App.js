import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Section from './section2.jsx';

function App() {
  return (
    
   //<Section/>
   <div className="Learning">
     {/* <p> My hello world</p>
    <Firstcompo></Firstcompo>
      <Secondcompo />*/}
      <header className="App-header">
       <img src={logo} className="App-logo" alt="logo" />
       <p>
         Hello World with react
     </p> 
       <a
         className="App-link"
         href="https://reactjs.org"
         target="_blank"
         rel="noopener noreferrer"
       >
         Learn React
        {/* <Thirdcompo /> */}
     </a>
     </header>
   </div>


  );
}

export default App;
