import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Component from '../pages/Component';
import GridLayout from '../pages/GridLayout';
import Home from '../pages/Home';
import Map from '../pages/Map';

const Dashboard = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-gray-200 flex">
      <Sidebar open={open} setOpen={setOpen} />
      <div className="h-screen flex-1">
        <Header open={open} setOpen={setOpen} />
        <div className='overflow-auto h-[90vh]'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/component' element={<Component />} />
            <Route path='/responsive' element={<GridLayout />} />
            <Route path='/map' element={<Map />} />
          </Routes>
        </div>
      </div>
      {open && (
        <div className="fixed inset-0 z-40 backdrop-blur-sm lg:hidden"></div>
      )}
    </div>
  );
}

export default Dashboard