import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    return (
        <ChatEngine
        height=" 100vh"
        projectID="82ea4dca-5823-466e-9bcf-8e8f4a1e7a87"
        userName="JSJorge"
        userSecret="secret"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps }/>}
        />
    );
  }

export default App;
