// import and install npm for chat
import { ChatEngine } from "react-chat-engine";

import "./App.css";

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="d0e35330-ac73-42f7-9d22-598cf64983f3"
      userName="nico"
      userSecret="1"
    />
  );
};

export default App;
