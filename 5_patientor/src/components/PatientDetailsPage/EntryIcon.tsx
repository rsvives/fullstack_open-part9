import {  EntryType } from "../../types";
import { assertNever } from "../../utils";


const EntryIcon = ({type}:{type:EntryType})=>{
    switch(type){
        case EntryType.HealthCheck:
            return '📊'; 
            
        case EntryType.Hospital:
            return '🏥'; 
            
        case EntryType.OccupationalHealthcare:
            return '💼'; 
        
        default:
            return assertNever(type);
    }

};
export default EntryIcon;