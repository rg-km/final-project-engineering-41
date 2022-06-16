import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import UserSetting from './components/user/userSetting';
import AccountSettings from './components/AccountSettings';
import PasswordSettings from './components/PasswordSetting';
import SubscriptionSettings from './components/SubscriptionSetting';

function App() {
  return (
    <>
      <Header />
      {/* <AccountSettings />
      <PasswordSettings /> */}
      <SubscriptionSettings />
      <Footer />
    </>
  );
}

export default App;
