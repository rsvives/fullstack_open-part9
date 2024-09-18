import { useField } from "../hooks"
import { NewDiaryEntry, Visibility, Weather } from "../types"

const NewDiary = ({handleSubmit}:{handleSubmit:(newDiaryEntry:NewDiaryEntry)=>void})=>{
    const dateInput = useField('text')
    const visibilityInput = useField('text')
    const weatherInput = useField('text')
    const commentInput = useField('text')
  
    const diaryCreation = async(event: React.SyntheticEvent)=>{
    event.preventDefault()
    console.log(dateInput.input.value,visibilityInput.input.value,weatherInput.input.value,commentInput.input.value)
  
    const newDiary = {
      date:dateInput.input.value, 
      visibility:visibilityInput.input.value as Visibility,
      weather:weatherInput.input.value as Weather,
      comment:commentInput.input.value,
    }
    handleSubmit(newDiary)
  
  }

  return (
    <>
    <h2>New diary</h2>
      <form onSubmit={diaryCreation} >
        <label htmlFor="date-input">Date:</label><br />
        <input id="date-input" {...dateInput.input} /><br /><br />
        
        <label htmlFor="visibility-input">Visibility:</label><br />
        <input id="visibility-input" {...visibilityInput.input}/><br /><br />
        
        <label htmlFor="weather-input">Weather:</label><br />
        <input id="weather-input" {...weatherInput.input}/><br /><br />
        
        <label htmlFor="comment-input">Comment:</label><br />
        <input id="comment-input" {...commentInput.input}/><br /><br />
        
        <button type='submit'>Add</button>
      </form>

    </>
)
}

  export default NewDiary