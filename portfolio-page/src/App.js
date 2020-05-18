import React from 'react';
import './App.css';
import Navbar from './components/navigation/Navbar';
import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './components/About/About';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import FormPage from './components/FormPage/FormPage';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <main>
<Switch>
<Route path="/" exact component={Home} />
<Route path="/about" component={About} />
<Route path="/blog" component={Blog} />
<Route path="/form" component={FormPage} />
</Switch>
       </main> 
    </BrowserRouter>
  );
}

export default App;
