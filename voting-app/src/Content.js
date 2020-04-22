import React from "react";


 const Content = ({ likeVotes, dislikeVotes}) => {
    if (likeVotes === 0 && dislikeVotes === 0) {
        return (
            <div>
                <h2>
                There are no votes yet. <br />
                Be the first one to vote!
                </h2>
            </div>
        );
    }
        return (
            <div>
                <h1>Votes</h1>
    <h2>Love: { likeVotes }</h2>
    <h2>Hate: { dislikeVotes }</h2>
            </div>
        );
    };
export default Content;