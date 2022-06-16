import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import UserSetting from './components/user/userSetting';
import Settings from './components/Settings';

function App() {
  return (
    <>
      <Header />
      <UserSetting />
      <Settings />
      <Footer />
    </>
  );
}

export default App;
