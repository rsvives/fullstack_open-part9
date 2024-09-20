import { Entry } from "../../types";
import { assertNever } from "../../utils";


const EntryIcon = ({type}:{type:Entry['type']})=>{
    switch(type){
        case 'HealthCheck':
            return '📊'; 
            
        case 'Hospital':
            return '🏥'; 
            
        case 'OccupationalHealthcare':
            return '💼'; 
        
        default:
            return assertNever(type);
    }

};
export default EntryIcon;