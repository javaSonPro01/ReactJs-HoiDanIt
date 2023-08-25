import './App.scss';
import Header from './components/Header/Header';
import { Link } from "react-router-dom";
const App = () => {
  return (

    <div className="app-container">
      <Header></Header>
      <div>Test</div>
      <div>
        <button><Link to="/users">Clicke me go to User</Link></button>
        <button><Link to="/admins">Clicke me go to Admin</Link></button>

      </div>
    </div>
  );
}

export default App;
