import React, { useState } from 'react';

import Menu from './components/Menu';
import TweetList from './components/TweetList';

const App = () => {
  const [isActive, setIsActive] = useState('');

  return (
    <div className="container" style={{ paddingTop: 75 }}>
      <div
        style={{ position: 'fixed', top: '0', zIndex: 999, right: 0, left: 0 }}
      >
        <Menu setIsActive={setIsActive} isActive={isActive} />
      </div>
      <TweetList isActive={isActive} />
    </div>
  );
};

export default App;
