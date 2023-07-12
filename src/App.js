import { BrowserRouter, Link, Route, Routes,} from 'react-router-dom';
import React from 'react';
import Header from './components/Header';
import './components/normalize.css';


function App() {
  return (
    <BrowserRouter>
      <Header />
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
