import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Content from "./Content";
import Button from "./Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHeartBroken, faRedo } from '@fortawesome/free-solid-svg-icons';


const App = () => {

const [likeVotes, setVotes] = useState(0);
const [dislikeVotes, getVotes] = useState(0);

const addHandler = () => setVotes(likeVotes +1 );
const removeHandler = () => getVotes(dislikeVotes +1 );
const resetHandler = () => {setVotes(0); getVotes(0)};
    return (
        <div>
            <div className="buttons">
            <Button click={addHandler} text="I love it  ">
            <FontAwesomeIcon icon={faHeart} />
            </Button>
            <Button click={removeHandler} text="I hate it  ">
            <FontAwesomeIcon icon={faHeartBroken} />
            </Button>
            <Button click={resetHandler} text="Reset  ">
              <FontAwesomeIcon icon={faRedo} />
            </Button>
            </div>
            <Content likeVotes={ likeVotes } dislikeVotes={ dislikeVotes } />
        </div>
    )
}
export default App;
