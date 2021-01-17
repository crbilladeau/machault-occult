import './App.css';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Home from './components/Home';
import Icon, { MobileEye } from './components/Icon';
import LegendLore from './components/LegendLore';
import LocateObject from './components/LocateObject';
import Sending from './components/Sending';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 6000);
  }, []);

  const [isDesktop, setDesktop] = useState(window.innerWidth > 768);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  });

  return (
    <>
      {loading === false ? (
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 2 }}
        >
          <Home />
          <LegendLore />
          <LocateObject />
          <Sending />
        </motion.div>
      ) : (
        <>
          {isDesktop ? (
            <Icon />
          ) : (
            <MobileEye />
          )}
        </>
      )}
    </>
  );
}

export default App;
