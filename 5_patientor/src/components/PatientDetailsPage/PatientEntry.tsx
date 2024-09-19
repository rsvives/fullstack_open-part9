import { Entry } from "../../types";

const PatientEntry = ({entry}:{entry:Entry})=>{
    return(
    <div style={{border:'1px solid gray', padding:12}}>
        <h4 style={{display:'flex',justifyContent:'space-between'}}><span>{entry.date}</span> {entry.specialist}</h4>
        <p>{entry.description}</p>
        <ul>
            {entry.diagnosisCodes?.map(code=><li>{code}</li>)}
        </ul>
    </div>
    );
};

export default PatientEntry;