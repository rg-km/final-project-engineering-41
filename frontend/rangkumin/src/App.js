import './App.css';
import { ChakraProvider, extendTheme, Text } from '@chakra-ui/react';
import { LeftSideLogin } from './components/LeftSideLogin';
import {RightSideLogin} from './components/RightSideLogin';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    
    <div>
      <LeftSideLogin />
      <RightSideLogin />
      </div>
  
  );
}

export default App;
