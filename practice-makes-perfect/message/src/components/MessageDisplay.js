import React from "react";

const MessageDisplay = (props) => {
    console.log()
    return(
        <>
        <div>MessageDisplay</div>
        <p><strong>First Name:</strong> {props.message.firstName}</p>
        <p><strong>Last Name:</strong> {props.message.lastName}</p>
        <p><strong>Message:</strong>  {props.message.message}</p>
        </>
    );
}

export default MessageDisplay;