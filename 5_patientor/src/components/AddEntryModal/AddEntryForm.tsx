
// import { PatientFormValues } from "../../types";

import { SyntheticEvent } from "react";
import { EntryWithoutId } from "../../types";

interface Props {
//  onSubmit: (values: PatientFormValues) => Promise<void>;
onSubmit: (entry:EntryWithoutId)=>void;
 onCancel: ()=>void
}

const AddEntryForm = ({onSubmit,onCancel}:Props)=>{
    // const [description,setDescription] = useState<string>('something bad');
    // const [date,setDate] = useState<string>('1991-12-12');
    // const [specialist,setSpecialist] = useState<string>('dr noir');
    // const [diagnosisCodes,setDiagnosisCodes] = useState<string[]>([ "Z57.1","Z74.3","M51.2"]);
        const description ='something bad';
        const date ='1991-12-12';
        const specialist ='dr noir';
        const diagnosisCodes = [ "Z57.1","Z74.3","M51.2"];

    const addEntry = (event:SyntheticEvent)=>{
        event.preventDefault();
        onSubmit({
            date,
            specialist,
            diagnosisCodes,
            description,
            type:'HealthCheck',
            healthCheckRating:2,

        });
    };
    
    return (
        <div>
            <form onSubmit={addEntry}>
                <label htmlFor="description"></label>
                {/* <input type="text" onChange={(ev)=>setDescription(ev.target.value)} /> */}
                <button type="button" onClick={onCancel}>Close</button>
                <button type="submit">Add</button>
            </form>
        
        </div>
    );
};

export default AddEntryForm;