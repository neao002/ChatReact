import React from "react";

import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import ThereMessage from "./ThereMessage";

const ChatFeed = (props) => {
  const { chats, activeChats, userName, messages } = props;

  const chat = chats && chats[activeChats];

  const renderMessages = () => {
    const keys = Object.keys(messages);
    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessageKey = index === 0 ? null : keys[index - 1];
      const isMyMessage = userName === message.sender.userName;

      return (
        <div key={`msg_${index}`} style={{ width: "100px" }}>
          <div className="message-block">
            {isMyMessage ? (
              <MyMessage message={message} />
            ) : (
              <ThereMessage
                message={message}
                lastMessage={messages[lastMessageKey]}
              />
            )}
          </div>
          <div
            className="read-receipts"
            style={{
              marginRight: MyMessage ? "18px" : "0px",
              marginLeft: MyMessage ? "0px" : "68px",
            }}
          >
            read-receipts
          </div>
        </div>
      );
    });
  };

  if (!chat) return "Loading.. ";

  return (
    <div className="chat-feed">
      <div className="chat-tittle-container"></div>
      <div className="chat-tittle">
        {chat?.title}
        <div className="chat-subtitle">
          {chat.people.map((person) => ` ${person.person.username}`)}
        </div>
        {renderMessages()}
        <div style={{ height: "100px" }} />
        <div className="message-form-container">
          <MessageForm {...props} chatId={activeChats} />
        </div>
      </div>
    </div>
  );
};

export default ChatFeed;
