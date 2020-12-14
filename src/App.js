import React from 'react';


import SearchPage from './templates/SearchPage';
import RealContext from './realContext'


function App() {


  return (
    <>

      <RealContext>
        <SearchPage />


      </RealContext>


    </>
  );
}

export default App;