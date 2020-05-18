import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="aboutMe">
            <br/>
            <h1>FEW FACTS ABOUT ME</h1>
            <main className="grid">
            <img className="avatar-image" src='https://images.unsplash.com/photo-1512207855369-643452a63d46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1575&q=80' alt='WOman avatar' />
            <div className="about-text">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. 
            <br/>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
            </div>
            </main>
        </div>
    );
};

export default About;