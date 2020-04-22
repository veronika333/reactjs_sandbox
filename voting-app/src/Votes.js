import React, { useState } from 'react';
import Content from "./Content";
import Button from "./Button";

/*const Button = ({ click, text }) => {
    return (
        <div>
<button onClick={click}>{text}</button>
        </div>
    );
}
*/
const Votes = () => {

const [likeVotes, setVotes] = useState(0);
const [dislikeVotes, getVotes] = useState(0);
const resetHandler = () => {setVotes(0); getVotes(0)};

const addHandler = () => setVotes(likeVotes +1 );
const removeHandler = () => getVotes(dislikeVotes +1 );

    return (
        <div className="buttons">
            
            <Button click={addHandler} text="I love it" />
            <Button click={removeHandler} text="I hate it" />
            <Button click={resetHandler} text="Reset" />
            <Content positive={ likeVotes } negative={ dislikeVotes } />
        </div>
    )
}
export default Votes;