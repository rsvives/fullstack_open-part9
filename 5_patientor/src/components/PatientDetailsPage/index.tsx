import { useEffect, useState } from "react";
import {  Diagnosis, EntryWithoutId, Patient } from "../../types";
import patientService from '../../services/patients';
import diagnosesService from '../../services/diagnoses';

import GenderIcon from "../GenderIcon";
import PatientEntry from "./PatientEntry";
import AddEntryModal from "../AddEntryModal";
import axios from "axios";

const PatientDetailsPage = ({id}:{ id: string  })=>{
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

    const addEntry = async(entry:EntryWithoutId)=>{
        try{
            const addedEntry = await patientService.addEntry(id,entry);
            console.log(addedEntry);
        }catch(error:unknown){
            if(axios.isAxiosError(error)){
                console.error(error);
               setError('something went wrong'); 
            }else{
                setError('unrecognized axios error');
            }
        }
    };

    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [error, setError] = useState<string>();
  
    const openModal = (): void => setModalOpen(true);
  
    const closeModal = (): void => {
      setModalOpen(false);
      setError(undefined);
    };

    return(
        <>
            <h2>{patientDetails?.name} <GenderIcon gender={patientDetails?.gender} />  </h2>
            <p>ssn: {patientDetails?.ssn}</p>
            <p>occupation: {patientDetails?.occupation}</p>
            <h3>Entries</h3>
            <AddEntryModal modalOpen={modalOpen} onClose={closeModal} onSubmit={addEntry} error={error}/>
            <button onClick={openModal}>New entry</button>
            <div style={{display:'flex',flexDirection:'column',gap:12}}>
            {patientDetails?.entries.map(e=><PatientEntry key={e.id} entry={e} diagnoses={diagnosesDetails}/>)}
            </div>
        </>
    );
};

export default PatientDetailsPage;