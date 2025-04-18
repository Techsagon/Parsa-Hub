import React from 'react';
import Header from '../components/Header';
import VideoGrid from '../components/VideoGrid';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header />
      <main className="flex-grow">
        <VideoGrid />
      </main>
    </div>
  );
};

export default Home;