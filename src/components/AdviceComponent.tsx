import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import getData from '../DataServices/DataServices';
import { useEffect, useState } from 'react';
import { Advice } from '../Interfaces/interface';


const AdviceComponent = () => {

    const [newAdvice, setNewAdvice] = useState<Advice>();


    useEffect (() => {
        const adviceData = async () => {
          const fetchedData = await getData();
          console.log(fetchedData);
          setNewAdvice(fetchedData);
          
        }
    
        adviceData();
      }, [])

      const getMoreData = async () => {
        const moreData = await getData();
        setNewAdvice(moreData);
      }

    
  return (
    <div className='boxBorder'>

        <h1 className='greenText'>ADVICE #{newAdvice?.slip.id}</h1>

        <h1 className='mainText'>"{newAdvice?.slip.advice}"</h1>
      
        <div className='center'>
        <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>
        </div>

        <div className='center diceDiv'>
        <button onClick={() => getMoreData()} className='diceBtn'>
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg>
        </button>
        </div>
    </div>
  )
}

export default AdviceComponent
