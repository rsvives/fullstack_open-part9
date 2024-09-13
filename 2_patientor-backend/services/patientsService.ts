import { patients } from "../data/patients";
import { NewPatient, Patient, PatientWithoutSSN } from "../types";
import { v4 as uuid } from 'uuid';

  const getAll = (): Patient[]=>{
    return patients;
};

  const getAllWithoutSSN = ():PatientWithoutSSN[] => {
    return patients.map( ({name,id,dateOfBirth, occupation, gender}) => ({name,id,dateOfBirth,occupation,gender}) );
};

 const addPatient = (patient:NewPatient):Patient=>{
    const newPatient = {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
        id:  uuid(),
        ...patient
    };

    patients.push(newPatient);
    return newPatient ; 
};

export default{
    getAll,
    getAllWithoutSSN,
    addPatient
};