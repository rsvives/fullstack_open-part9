import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { DiaryEntry } from './types';
import Diary from './components/Diary';

function App() {
  const [diaries,setDiaries] = useState<DiaryEntry[]>([])
async function fetchData() {
  const {data}  = await axios.get('http://localhost:3000/api/diaries');
  setDiaries(data)
}
  useEffect(()=>{
    fetchData()
  },[])

  return (
    <>
      <h1>Flight Diary</h1>
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
