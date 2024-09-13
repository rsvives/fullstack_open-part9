import { Response, Router } from "express";
import patientService from "../services/patientsService";
import { NewPatient, Patient, PatientWithoutSSN } from "../types";

const router = Router();

router.get('/',(_req,res:Response<PatientWithoutSSN[]>)=>{
    const patients = patientService.getAllWithoutSSN();
    res.status(200).json(patients);
});

router.post('/',(req,res:Response<Patient>)=>{
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const {name,dateOfBirth,ssn,occupation,gender}:NewPatient = req.body;

    const newPatient = patientService.addPatient({name,dateOfBirth,occupation,ssn,gender});
    res.status(200).json(newPatient);
});

export default router;