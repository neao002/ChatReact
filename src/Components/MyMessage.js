import React from "react";

const MessageForm = ({ message }) => {
  if (message?.attachments?.lenght > 0) {
    return (
      <img
        src={message.attachments[0].file}
        alt="message-attachment"
        className="message-image"
        style={{ float: "right" }}
      ></img>
    );
  }

  return (
    <div
      className="message"
      style={{
        float: "right",
        marginRight: "18px",
        color: "white",
        backgroundColor: "#3b2a50",
      }}
    >
      {" "}
      {message.text}
    </div>
  );
};

export default MessageForm;
