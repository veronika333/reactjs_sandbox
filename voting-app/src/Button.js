import React from "react";

const Button = ({ click, text, children }) => {
    return (
        <div>
<button onClick={click}>
    {text}
    {children}
</button>
        </div>
    );
}
export default Button;