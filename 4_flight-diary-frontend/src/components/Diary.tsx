import { DiaryEntry } from "../types";

const Diary = ({data}:{data:DiaryEntry})=>{
    return (
        <div>
            <h3>{data.date}</h3>
            <p><b>visibility:</b>{data.visibility}</p>
            <p><b>weather:</b>{data.weather}</p>            
            <p><i>{data.comment}</i></p>
        </div>
    )
}
export default Diary