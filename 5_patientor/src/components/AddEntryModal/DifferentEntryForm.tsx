// import {  EntryType, HealthCheckEntry, HospitalEntry, OccupationalHealthcareEntry } from "../../types";
// import { assertNever } from "../../utils";

// type Props = {
//     data: Partial<HospitalEntry> | Partial<HealthCheckEntry> | Partial<OccupationalHealthcareEntry>
//     type :EntryType;
// };

// const DifferentEntryForm = (props:Props)=>{

//     switch(props.type){
//         case EntryType.HealthCheck:
//             props.data={healthCheckRating:2};
//             return JSON.stringify(props.data);
//         case EntryType.Hospital:
//             props.data={discharge:{criteria:'ASDF',date:'1234'}};
//             return JSON.stringify(props.data);
//             return 'form 2';
//         case EntryType.OccupationalHealthcare:
//             props.data={employerName:'menganito',sickLeave:{endDate:'1234-12-12',startDate:'1234-11-11'}};
//             return JSON.stringify(props.data);
//             return 'form 3';
        
//         default:
//             return assertNever(props.type);
//     }

// };

// export default DifferentEntryForm;