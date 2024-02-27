
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/NavBar';
import News from './components/News';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App=()=>{
  const pageSize = 5;
  const apiKey = "a2032c574dc540b293752e5a06c76d4b"
  const [progress, setProgress] = useState(0)
    return (
      <div>
        <Router>

        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}  
      />
        
        <Routes>
          <Route exact path='/general' element={<News  setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} key="general" pagesize={5} country='in' category="general"/>} />
          <Route exact path='/entertainment' element={<News  setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} key="entertainment" pagesize={5} country='in' category="entertainment"/>}/>
          <Route exact path='/science'element={<News  setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} key="science" pagesize={5} country='in' category="science"/>}/>
          <Route exact path='/health'element={<News setProgress={setProgress} apiKey={apiKey}   pageSize={pageSize} key="health" pagesize={5} country='in' category="health"/>}/>
          <Route exact path='/technology'element={<News  setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} key="technology" pagesize={5} country='in' category="technology"/>}/>
          <Route exact path='/sports'element={<News setProgress={setProgress} apiKey={apiKey}   pageSize={pageSize} key="sports" pagesize={5} country='in' category="sports"/>}/>
        </Routes>
        </Router>
      </div>
    )
}
export default App;