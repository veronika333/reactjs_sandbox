import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams} from 'react-router-dom';
import './portfolio.css';
import About from './About';
import Blog from './Blog';

const posts = [
    {
      id: 1,
        title: "This is post 1",
        desc: "Lorem text would be hereIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using",
        img: "https://images.unsplash.com/photo-1476362174823-3a23f4aa6d76?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    },
    {
      id: 2,
        title: "This is post 2",
        desc: "Lorem text would be hereIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using",
        img: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    },
    {
      id: 3,
        title: "This is post 3",
        desc: "Lorem text would be hereIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using",
        img: "https://images.unsplash.com/photo-1529260830199-42c24126f198?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80",
    },
  ];
  




const Nav = () => {
    return (
        <div>
            <header>
                <div id="log">
            Veronika
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About me</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                </ul>
            </nav>
            </header>
        </div>
    );
};

const Home =()=> {
    return (
        <h1>Welcome to my Home page</h1>
    )
}

const About =()=> {
    return (
        <About />
    )
}
const Blog =()=> {
    let { path, url } = useRouteMatch();
    return (
        <div>
        <Blog />
        
        <ul>
            <li>
<Link to={`${url}/html&css`}>HTML and CSS</Link>
            </li>
            <li>
<Link to={`${url}/UIprototyping`}>UI Prototyping</Link>
            </li>
            <li>
<Link to={`${url}/reactbasics`}>React Basics</Link>
            </li>
            <li>
<Link to={`${url}/about`}>About</Link>
            </li>
        </ul>

        <Switch>
<Route path={`${path}/html&css`} component={About} />
<Route path={`${path}/:CourseId`}>
    <Topic />
</Route>
        </Switch>
        </div>
    );
};
const Topic =()=>{
    let {CourseId} = useParams();
return <h1>This is page for {CourseId}</h1>;
};

const Portfolio = () => {
    return (
        <Router>
            <Nav />
        <main>
<Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/blog" component={Blog} />
</Switch>
        </main>
        </Router>
    );
};
export default Portfolio;