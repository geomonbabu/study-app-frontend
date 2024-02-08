import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddCourse from './components/AddCourse';
import ViewCourse from './components/ViewCourse';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/'element={<AddCourse/>}/>
        <Route path='/viewcourse'element={<ViewCourse/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
