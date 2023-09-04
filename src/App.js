import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Header from "./component/Header"
import Signup from './component/Signup'
import Login from './component/Login';
import Details from './component/Details';
import Error from './component/Error';
// import "./App.css";

const App = () => {
  return (
<>
<Header/>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Signup/>}></Route>
  <Route path='/login' element={<Login/>}></Route>
  <Route path='/details' element={<Details/>}></Route>
  <Route path='*' element={<Error/>}></Route>
</Routes>
</BrowserRouter>



</>
  )
}

export default App