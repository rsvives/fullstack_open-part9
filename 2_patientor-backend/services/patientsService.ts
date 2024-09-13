import { patients } from "../data/patients";
import { Patient, PatientWithoutSSN } from "../types";

 export const getAll = (): Patient[]=>{
    return patients;
};

 export const getAllWithoutSSN = ():PatientWithoutSSN[] => {
    return patients.map( ({name,id,dateOfBirth, occupation, gender}) => ({name,id,dateOfBirth,occupation,gender}) );
};
