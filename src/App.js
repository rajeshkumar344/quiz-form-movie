import logo from './logo.svg';
import './App.css';
import Hompage from './components/Hompage';
import { Route, Routes } from 'react-router-dom';
import Question from './components/Question';
import Result from './components/Result';
import Movie from './components/Movie';
import Header from './components/Header ';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
  
    {/* <Routes>
      <Route path="/"element ={<Hompage/>}></Route>
      <Route path='qtn'element ={<Question/>}></Route>
      <Route path='rst'element ={<Result/>}></Route>
     
    </Routes> */}


    {/* <Header/>
    <Movie/> */}

    <Form/>
    </div>
  );
}

export default App;
