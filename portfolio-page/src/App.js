import React from 'react';
import './App.css';
import Navbar from './components/navigation/Navbar';
import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './components/navigation/About';
import Blog from './components/navigation/Blog';
import FormPage from './components/navigation/FormPage';

const Home = () => {
  return (
           <div className="greeting">        
     <h1>HELLO & WELCOME TO MY BLOG</h1>
      <img src="https://lh3.googleusercontent.com/proxy/TpF3fM_vVzvlI3b9SvfUecoU0SNageeOAuoGjR5NQX9B-6zN-Yh3efaF4nbS3jEou96lqczZyDoj9VvdbLmQmij1pJppRgRbjRg00JiYoLqQn2qfi0wrF931nUk" />
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
<Route path="/form" component={FormPage} />
</Switch>
       </main> 
    </BrowserRouter>
  );
}

export default App;
