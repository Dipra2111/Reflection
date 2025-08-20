import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import MoodPage from './pages/MoodPage';
import UserInfoPage from './pages/UserInfoPage';
import OverviewPage from './pages/OverviewPage';
import MeditatePage from './pages/MeditatePage';
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/moodpage" element={<MoodPage/>}/>
      <Route path="/userinfopage" element={<UserInfoPage/>}/>
      <Route path="/overview" element={<OverviewPage/>}/>
      <Route path="/meditate" element={<MeditatePage/>}/>
    </Routes>
  );
}

export default App;