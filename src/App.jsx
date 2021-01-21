import React from "react"
import './App.css';
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Sidebar from "./components/Sidebar"
import Footer from "./components/Footer"



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
