import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import TopHUD from './components/TopHUD';
import MiniMap from './components/MiniMap';
import CityBackground from './components/CityBackground';
import GameNotification from './components/GameNotification';
import HeroSection from './components/HeroSection';
import PlayerProfile from './components/PlayerProfile';
import EvolutionTimeline from './components/EvolutionTimeline';
import MissionsSection from './components/MissionsSection';
import AbilitiesWheel from './components/AbilitiesWheel';
import WantedLevel from './components/WantedLevel';
import CompletedMissions from './components/CompletedMissions';
import AchievementsBadges from './components/AchievementsBadges';
import PlayerProgress from './components/PlayerProgress';
import InteractiveCityMap from './components/InteractiveCityMap';
import SafehouseContact from './components/SafehouseContact';
import FinalGTA5Hud from './components/FinalGTA5Hud';
import { soundManager } from './sound/audioEffects';

export default function App() {
  const [isLoading, setIsLoading] = useState(() => {
    try {
      return !sessionStorage.getItem('hasCompletedGTAIntro');
    } catch (e) {
      return true;
    }
  });

  const [currentWanted, setCurrentWanted] = useState(5);
  const [notification, setNotification] = useState(null);

  const triggerNotification = (notif) => {
    soundManager.playNotification();
    setNotification(notif);
    setTimeout(() => {
      setNotification((curr) => (curr === notif ? null : curr));
    }, 2800);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isLoading) {
        setIsLoading(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLoading]);

  return (
    <div className="min-h-screen bg-[#080B11] text-gray-100 font-sans selection:bg-[#FF2A85] selection:text-white relative">
      {/* Open-World City Ambient Background */}
      <CityBackground />

      {/* Floating Game Notification System */}
      <GameNotification notification={notification} />

      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <>
          {/* Top Fixed HUD with Radio & Stats */}
          <TopHUD
            currentWanted={currentWanted}
            onWantedChange={(level) => setCurrentWanted(level)}
            onNotify={triggerNotification}
          />

          {/* Floating Radar MiniMap */}
          <MiniMap onNotify={triggerNotification} />

          {/* Main Portfolio Content Flow */}
          <main className="relative z-10">
            <HeroSection onNotify={triggerNotification} />
            <PlayerProfile />
            <EvolutionTimeline onNotify={triggerNotification} />
            <MissionsSection onNotify={triggerNotification} />
            <AbilitiesWheel onNotify={triggerNotification} />
            <WantedLevel
              currentWanted={currentWanted}
              onWantedChange={(level) => setCurrentWanted(level)}
            />
            <CompletedMissions />
            <AchievementsBadges />
            <PlayerProgress />
            <InteractiveCityMap />
            <SafehouseContact />
          </main>

          {/* GTA V Final HUD Footer */}
          <FinalGTA5Hud />
        </>
      )}
    </div>
  );
}
