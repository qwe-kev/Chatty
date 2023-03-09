import { Route } from 'react-router-dom';
import homepage from './Pages/Homepage';
import ChatPage from './Pages/ChatPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route path='/' component={homepage} exact></Route>
      <Route path='/chats' component={ChatPage}></Route>
      <Route></Route>
    </div>
  );
}

export default App;
