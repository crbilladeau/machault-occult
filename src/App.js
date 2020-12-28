import './App.css';
import React, {useEffect, useState} from 'react';
import {motion} from 'framer-motion';
import Home from './components/Home';
import Icon from './components/Icon';
import LegendLore from './components/LegendLore';
import LocateObject from './components/LocateObject';
import Sending from './components/Sending';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 6000)
  }, []);

  return (
    <>
      {loading === false ? (
      <motion.div
        animate={{opacity: [0, 1]}}
        transition={{duration: 2}}
      >
        <Home />
        <LegendLore />
        <LocateObject />
        <Sending />
      </motion.div>
      ) : (
        <Icon />
      )}
    </>
  );
}

export default App;