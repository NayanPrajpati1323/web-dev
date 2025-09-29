// import Navbar from './components/navbar'
// import {createBrowserRouter , RouterProvider} from 'react-router-dom'
// import Home from './components/Home'
// import Login from './components/Login'
// import About from './components/About'
// import User from './components/User'
// import Contactus from './components/Contactus'



// function App() {
//   const router = createBrowserRouter ([
//     {
//       path : "/",
//       element: <><Navbar /><Home/></>
//     },
//     {
//       path: "/Login",
//       element: <><Navbar /><Login/></>
//     },
//     {
//       path:"/About",
//       element: <><Navbar /><About/></>
//     },
//     {
//       path:"/Contactus",
//       element: <><Navbar /><Contactus/></>
//     },
//     {
//       path:"/user/:username",
//       element:<><Navbar /><User/></>
//     }
// ])
//   return (
//     <>
        
//       <RouterProvider router={router} />
//     </>
//   )
// }

// export default App

import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// Pages
const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;
const Contact = () => <h2>Contact Page</h2>;

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
