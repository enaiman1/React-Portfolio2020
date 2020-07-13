import React from 'react';
import Page from './page/Pages'
import SidePage from './page/SidePage/SidePage'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <SidePage />
    <Page />
    <Footer />
    </div>
  );
}

export default App;
