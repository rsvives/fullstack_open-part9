import { useEffect, useState } from "react";
import {  Patient } from "../../types";
import patientService from '../../services/patients';


import GenderIcon from "../GenderIcon";

const PatientDetailsPage = ({id}:{ id: string | undefined })=>{
    const [patientDetails,setPatientDetails] = useState<Patient>();
    
    const fetchPatientDetails = async (patientId:string)=>{
        const patient = await patientService.getById(patientId);
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
        </>
    );
};

export default PatientDetailsPage;