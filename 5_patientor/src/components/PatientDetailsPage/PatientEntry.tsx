import { Diagnosis, Entry, HealthCheckRating } from "../../types";
import EntryIcon from "./EntryIcon";

const PatientEntry = ({entry,diagnoses}:{entry:Entry, diagnoses:Map<Diagnosis['code'],Diagnosis> |undefined})=>{


    

    return(
    <div style={{border:'1px solid gray', padding:12}}>
        <h4 style={{display:'flex',justifyContent:'space-between'}}><span>{entry.date}</span> {entry.specialist}</h4>
        <p> <EntryIcon type={entry.type}/> {entry.type==='OccupationalHealthcare' && `(${entry.employerName})`} {entry.description}</p>
        <i>{entry.type==='HealthCheck' && (HealthCheckRating[entry.healthCheckRating])}</i>
        <ul>
            {entry.diagnosisCodes?.map(code=><li key={code}>{code}: {diagnoses?.get(code)?.name}</li>)}
        </ul>
    </div>
    );
};

export default PatientEntry;