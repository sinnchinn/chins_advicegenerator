import './App.css';
import { useEffect, useState } from 'react';
import getData from './DataServices/DataServices';
import { Advice } from './Interfaces/interface';
import AdviceComponent from './components/AdviceComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {





  return (
    <div className='App-header'>
      
      {
        <AdviceComponent/>        
      }

      

      

    </div>
  );
}

export default App;
