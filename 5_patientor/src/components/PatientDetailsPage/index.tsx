import { useEffect, useState } from "react";
import {  Diagnosis, Patient } from "../../types";
import patientService from '../../services/patients';
import diagnosesService from '../../services/diagnoses';


import GenderIcon from "../GenderIcon";
import PatientEntry from "./PatientEntry";

const PatientDetailsPage = ({id}:{ id: string | undefined })=>{
    const [patientDetails,setPatientDetails] = useState<Patient>();
    const [diagnosesDetails, setDiagnosesDetails] = useState<Map<Diagnosis['code'],Diagnosis>>();
    const fetchPatientDetails = async (patientId:string)=>{
        const patient = await patientService.getById(patientId);
        const codes = new Set(patient.entries?.map(e=>e.diagnosisCodes).flat());
        const diagnoses = codes? await diagnosesService.getByCodes(Array.from(codes) as Array<Diagnosis['code']>):null;
        
        if(diagnoses){
            const {map} = diagnoses;
            console.log(map);
            setDiagnosesDetails(map);
        }

        console.log(diagnoses);

        setPatientDetails(patient);
    };

    useEffect(()=>{
        if(id) fetchPatientDetails(id);
    },[id]);



    return(
        <>
            <h2>{patientDetails?.name} <GenderIcon gender={patientDetails?.gender} />  </h2>
            <p>ssn: {patientDetails?.ssn}</p>
            <p>occupation: {patientDetails?.occupation}</p>
            <h3>Entries</h3>
            <div style={{display:'flex',flexDirection:'column',gap:12}}>
            {patientDetails?.entries.map(e=><PatientEntry key={e.id} entry={e} diagnoses={diagnosesDetails}/>)}
            </div>
        </>
    );
};

export default PatientDetailsPage;