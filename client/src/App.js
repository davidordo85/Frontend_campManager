import CampList from './components/index/CampList';
import { LoginPage } from './components/auth';
import bg from './assets/images/bg.jpeg';
import './App.css';

var backgroundStyle = {
  width: '100%',
  height: '100vh',
  backgroundPosition: ' 10px 30px',
  backgroundImage: `url(${bg})`,
  margin: 0,
};

function App() {
  return (
    <div className="App" style={backgroundStyle}>
      <LoginPage />
      {/* <CampList /> */}
    </div>
  );
}

export default App;
