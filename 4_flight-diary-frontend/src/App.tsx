import { useEffect, useState } from 'react'
import './App.css'
import { DiaryEntry, NewDiaryEntry } from './types';
import Diary from './components/Diary';

import { 
  createNewDiary, 
  getAllDiaries } from './services/diaryService';
import NewDiary from './components/NewDiary';
import { AxiosError } from 'axios';

type Notification={
  message:string,
}

function NotificationComponent({message}:Notification){
  
  return(
    message!='' && <p style={{color:'red',background:'rgba(255,0,0,0.2)',padding:'4px 8px', position:'sticky', top:8,left:0,width:'100%',margin:12}}>{message}</p>
  )
} 

function App() {
  const [diaries,setDiaries] = useState<DiaryEntry[]>([])
  const [errorMessage, setErrorMessage] = useState<string>('')
  async function fetchData() {
    const data = await getAllDiaries();
    setDiaries(data as DiaryEntry[])
  }
  useEffect(()=>{
    fetchData()
  },[])
  console.log(diaries)

  const addNewDiary = async(diaryData:NewDiaryEntry):Promise<void>=>{
    try{
      const savedDiary = await createNewDiary({...diaryData})
      setDiaries(prev=>prev.concat(savedDiary as DiaryEntry))
    }catch(error:unknown){
      if(error instanceof AxiosError){
        setErrorMessage(error.response?.data)
      }else{
        setErrorMessage('unexpected error')
      }
      console.error(error)
      setTimeout(()=>setErrorMessage(''),3000)
    }
  }

  return (
    <>
      <h1>Flight Diary</h1>
      <NotificationComponent message={errorMessage} />
      <NewDiary handleSubmit={addNewDiary} />
      <h2>Diary Entries</h2>
      <div>
        {diaries.map(d=>{
          return <Diary key={d.id} data={d} />
        })}
      </div>
    </>
    )
}

export default App
