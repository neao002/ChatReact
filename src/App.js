// import and install npm for chat
import { ChatEngine } from "react-chat-engine";

import ChatFeed from "./Components/ChatFeed";

import LoginForm from "./Components/LoginForm";

import "./App.css";

const projectID = "d0e35330-ac73-42f7-9d22-598cf64983f3";

const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() =>
        new Audio(
          "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
        ).play()
      }
    />
  );
};

export default App;
