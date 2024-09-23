import { Request, Response, Router } from "express";
import patientService from "../services/patientsService";
import {  NewEntry, NewPatient, Patient, PatientWithoutSSN } from '../types';
import { errorMiddleware, newEntryParser, newPatientParser } from "../middlewares";

const router = Router();

router.get('/',(_req,res:Response<PatientWithoutSSN[]>)=>{
    const patients = patientService.getAllWithoutSSN();
    res.status(200).json(patients);
});
router.get('/:id',(req,res:Response<Patient | {error: string}>)=>{
    const {id} = req.params;
    const patient = patientService.getPatientById(id);
    
    if(!patient) res.status(404).json({error:'Patient not found'});
    
    res.status(200).json(patient);
    
});

router.post('/',newPatientParser,(req:Request<unknown,unknown,NewPatient>,res:Response<NewPatient>)=>{
    const addedPatient = patientService.addPatient(req.body);
    res.status(200).json(addedPatient);
});


router.post('/:id/entries',newEntryParser,(req:Request<{id:string},unknown,NewEntry>,res:Response<Patient | {error: string}>)=>{
    const  {id}  = req.params;
    const entry   = req.body;

    console.log(`entries from patient with id ${id}`,entry);
    const patientWithAddedEntry = patientService.addEntryToPatient(id,entry);

    if(!patientWithAddedEntry) res.status(404).json({error:'Patient not found'});

    res.json(patientWithAddedEntry);
});

router.use(errorMiddleware);

export default router;