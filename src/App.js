import React from 'react';
import Layout from './components/layout';
import SpeedDial from './SpeedDial';

import Routers from './Routes'
import "./App.css"

function App() {
  return (
    <Layout>
      <Routers />
      <SpeedDial />
    </Layout>
     );
}

export default App;
