import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SideBar from './components/SideBar';
import Content from './components/Content';

class App extends React.Component{
  render(){
  return(
  <div className='grid'>
    <Header title = "Practise 4" />
    <Content text = "My first React project" />
    <SideBar text = "Executed by Yevhenii Kucheruk" />
    <Footer title="The end" />
  </div>)
  }
}

export default App;
