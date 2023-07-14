import Main from './pages/Main';
import { BrowserRouter, Link, Route, Routes, } from 'react-router-dom';
import React from 'react';
import './normalize.css';


function App() {
  return (
    <BrowserRouter>
      
      <Main></Main>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>MainPage</Link>
            </li>
            <li>
            <Link to='/Products/list'>Products</Link>  
            </li>
            <li>
            <Link to='/BookMark'> BookMark</Link>  
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/Products/list' element={<Products/>}></Route>
          <Route path='/BookMark' element={<BookMark/>}></Route>
        </Routes>
      </div>
      
   </BrowserRouter>
  );
}
function MainPage() {
  
}
function Products() {
  
}
function BookMark() {
  
}
export default App;
