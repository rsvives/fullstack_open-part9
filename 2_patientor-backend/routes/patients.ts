import { Response, Router } from "express";
import patientService from "../services/patientsService";
import {  Patient, PatientWithoutSSN } from '../types';
import { newPatientConverter } from "../utils";

const router = Router();

router.get('/',(_req,res:Response<PatientWithoutSSN[]>)=>{
    const patients = patientService.getAllWithoutSSN();
    res.status(200).json(patients);
});

router.post('/',(req,res:Response<Patient>)=>{
    
    const newPatient = newPatientConverter(req.body);
     
    const addedPatient = patientService.addPatient(newPatient);
    res.status(200).json(addedPatient);
});

export default router;