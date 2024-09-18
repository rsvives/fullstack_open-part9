import { useState } from "react"
import { useField } from "../hooks"
import { NewDiaryEntry, Visibility, Weather } from "../types"

const NewDiary = ({handleSubmit}:{handleSubmit:(newDiaryEntry:NewDiaryEntry)=>void})=>{
    const dateInput = useField('date')
    const [visibility,setVisibility] = useState('')
    const [weather,setWeather] = useState('')
    const commentInput = useField('text')
  
    const diaryCreation = async(event: React.SyntheticEvent)=>{
    event.preventDefault()
    console.log(dateInput.input.value,visibility,weather,commentInput.input.value)
  
    const newDiary = {
      date:dateInput.input.value, 
      visibility:visibility as Visibility,
      weather:weather as Weather,
      comment:commentInput.input.value,
    }
    handleSubmit(newDiary)
  
  }

  return (
    <>
    <h2>New diary</h2>
      <form onSubmit={diaryCreation} >
        <label htmlFor="date-input">Date:</label><br />
        <input id="date-input" {...dateInput.input} required/><br /><br />
        
        
        <legend>Visibility:</legend>
        {Object.values(Visibility).map(el=>{
            return(
                <>
                <input id={el+'-visibility-input'} type="radio" value={el} name="visibility" onChange={()=>setVisibility(el)}/>
                <label htmlFor={el+'-visibility-input'}>{el}</label>
            </>
            )
        })}
        <br /><br />

        <legend>Weather:</legend>
        {Object.values(Weather).map(el=>{
            return(
            <>
                <input id={el+'-weather-input'} type="radio" value={el} name="weather" onChange={()=>setWeather(el)}/>
                <label htmlFor={el+'-weather-input'}>{el}</label>
            </>
            )
        })}
        <br /><br />
        
        <label htmlFor="comment-input">Comment:</label><br />
        <input id="comment-input" {...commentInput.input}/><br /><br />
        
        <button type='submit'>Add</button>
      </form>

    </>
)
}

  export default NewDiary