import './App.css';
import { ChakraProvider, extendTheme, Text } from '@chakra-ui/react';
import { LeftSideLogin } from './components/LeftSideLogin';
import {RightSideLogin} from './components/RightSideLogin';
import { Register } from './components/Register';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    
    <div>
      {/* <LeftSideLogin />
      <RightSideLogin /> */}
      <Register />
      </div>
  
  );
}

export default App;
