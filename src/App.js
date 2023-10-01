import React, { useEffect } from 'react';
import './App.css';
import Modal from './Components/Modal';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './Components/Home';
import Sports from './Components/Sports';
import Technology from './Components/Tech';
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';
import Business from './Components/Business';
import Health from './Components/Health';
import Entertainment from './Components/Entertainment';
import Science from './Components/Science';


function App() {
  const menuModal = useSelector(state => state.modal.menuModal);
  const [progress, setProgress] = useState(0)


  return (
    <>

      <BrowserRouter>
        <Navbar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        {menuModal ? <Modal /> : null}

        <Routes>
          <Route path="/" element={<Home category="general" setProgress={setProgress} />} />
          <Route path="/sports" element={<Sports category="sports" setProgress={setProgress} />} />
          <Route path="/technology" element={<Technology category="technology" setProgress={setProgress} />} />
          <Route path="/business" element={<Business category="business" setProgress={setProgress} />} />
          <Route path="/health" element={<Health category="business" setProgress={setProgress} />} />
          <Route path="/entertainment" element={<Entertainment category="entertainment" setProgress={setProgress} />} />
          <Route path="/science" element={<Science category="science" setProgress={setProgress} />} />

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
