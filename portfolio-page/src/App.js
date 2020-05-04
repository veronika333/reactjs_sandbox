import React from 'react';
import './App.css';
import Navbar from './components/navigation/Navbar';
import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './components/navigation/About';
import Blog from './components/navigation/Blog';

const Home = () => {
  return (
      <div>
        <body>
           <div className="greeting">
      Welcome to My Homepage
    </div>
    </body>
      </div>
  )
}



function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <main>
<Switch>
<Route path="/" exact component={Home} />
<Route path="/about" component={About} />
<Route path="/blog" component={Blog} />
</Switch>
       </main> 
    </BrowserRouter>
  );
}

export default App;
