import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';
import TodoList from './Homepage/To-do/TodoList';
import Homepage from './Homepage/Homepage';
import Calendar from './Calendar/Calendar';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/home' element={<Homepage />}></Route>
        <Route path='/completed-tasks'></Route>
        <Route path='/to-do' element={<TodoList />}></Route>
        <Route path='/calendar' element={<Calendar />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
