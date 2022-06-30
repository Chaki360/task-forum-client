import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/'></Route>
        <Route path='/home'></Route>
        <Route path='/completed-tasks'></Route>
        <Route path='/to-do'></Route>
        <Route path='/calendar'></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
