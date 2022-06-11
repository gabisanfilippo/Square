import './App.css';

import {createGlobalStyle} from 'styled-components'
import { BrowserRouter } from "react-router-dom";
import {Helmet} from "react-helmet";

import RoutesApp from "./Routes";
import Header from './components/Header'
import Footer from './components/Footer';

const GlobalStyle = createGlobalStyle`
  *{
      margin: 0;
      font-family: 'Clash Display', sans-serif;
      box-sizing: border-box;
      list-style: none;
      padding: 0;
  }
  a,Link{
    text-decoration: none;
  }
  a,button:hover{
    cursor: pointer;
  }
`  

function App() {
  return (
    <BrowserRouter className="App"> 
      <Helmet>
        <link
          href="https://fonts.cdnfonts.com/css/clash-display"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle/>
      <Header /> 
      <RoutesApp/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
