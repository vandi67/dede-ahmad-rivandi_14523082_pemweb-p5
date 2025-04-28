// import libraries
import React, { use, useState } from "react";
import Header from "./Header.jsx";
import Footer from "./footer.jsx";
import List from "./list.jsx";
import "./App.test.js";
import Top from "./top.jsx";
import Main from "./main.js";

// membuat kompenen dengan class

// create component
const App =() => {
  const [state,setState] =useState(0)
  const increase =()=> {
    setState (count=>count+1)
  }
  const decrease =()=>{
    setState (count=>count-1)
  }  
  // console.log(state)  
  return (
    <div className="App">
      <h1>Hello React</h1>
      <p> Nama vandi</p>

      <Header list= "10 daftar makanan" />
      <main />

      <button onClick={increase}>Tambah</button>
      <br/>
      <span>(0)</span>
      <br/>
      <button onClick={decrease}>Kurang</button>
      <Main/>
      <Top/>
      <List/>
      <Footer/> 

    </div>
  );
};

// export default
export default App;