import React from "react";

const MessageForm = ({ lastMessage, message }) => {
  const ifFirstMessageByUser =
    !lastMessage || lastMessage.sender.username !== message.sender.username;
  return <div className="message-row">/div>;
};

export default MessageForm;
