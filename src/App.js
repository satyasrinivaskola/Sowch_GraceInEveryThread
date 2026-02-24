import {lazy,Suspense} from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import './App.css';

import Home from './Component/Home.js'
import Navbar from './Component/nav'



import About from './Component/About'
import Contact from './Component/contact'

function App() {
const Collection =lazy(()=> import ('./Component/collection'))
  return (
    <div className="App">
    <BrowserRouter>
    
       <Navbar />
      
       <Routes>
<Route path="/About" element={<About/>} />
<Route path="/Collection" element={ <Suspense fallback={<h2>Loading Collection...</h2>}>
        <Collection />
      </Suspense>} />
<Route path="/Contact" element={<Contact />} />
<Route path="/" element={<Home />} />
</Routes>
       </BrowserRouter>
        <footer>
         <div className="footer-bottom">
      © {new Date().getFullYear()} Sowch. All rights reserved.
    </div></footer>
    </div>
  );
}

export default App;
