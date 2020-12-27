import './App.css';
import styled from 'styled-components';
import Home from './components/Home';
// import Icon from './components/Icon';
import LegendLore from './components/LegendLore';
import LocateObject from './components/LocateObject';
import Sending from './components/Sending';

function App() {
  return (
    <>
      {/* <Icon /> */}
      <Home />
      <LegendLore />
      <LocateObject />
      <Sending />
    </>
  );
}

export default App;