import React from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import SWOTAnalysis from './components/SWOTAnalysis';
import OrganizationalIdentity from './components/OrganizationalIdentity';
import StrategicObjectives from './components/StrategicObjectives';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Introduction />
      <SWOTAnalysis />
      <OrganizationalIdentity />
      <StrategicObjectives />
      <Footer />
    </div>
  );
}

export default App;
