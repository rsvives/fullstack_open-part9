import { patients } from "../data/patients";
import { NewPatient, Patient, PatientWithoutSSN } from "../types";
import { v4 as uuid } from 'uuid';

  const getAll = (): Patient[]=>{
    return patients;
};

  const getAllWithoutSSN = ():PatientWithoutSSN[] => {
    return patients.map( ({name,id,dateOfBirth, occupation, gender}) => ({name,id,dateOfBirth,occupation,gender}) );
};

const getPatientById = (id:string):Patient | undefined=>{
  return patients.find(p=>p.id===id);
};
 const addPatient = (patient:NewPatient):Patient=>{
    const newPatient = {
         
        id:  uuid(),
        entries:[],
        ...patient
    };

    patients.push(newPatient);
    return newPatient ; 
};

export default{
    getAll,
    getAllWithoutSSN,
    getPatientById,
    addPatient
};