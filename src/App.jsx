import React from "react";;
import Footer from './componenets/Footer'
import Main  from './componenets/Main'
import Navbar  from './componenets/Navbar'
import  Sidebar from './componenets/Sidebar'
import './App.css';

function App() {
  return (
    <div className="App">
      <Main />
      <Navbar />
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;
