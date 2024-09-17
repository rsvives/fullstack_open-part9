import { Request, Response, Router } from "express";
import patientService from "../services/patientsService";
import { NewPatient, PatientWithoutSSN } from '../types';
import { errorMiddleware, newPatientParser } from "../middlewares";

const router = Router();

router.get('/',(_req,res:Response<PatientWithoutSSN[]>)=>{
    const patients = patientService.getAllWithoutSSN();
    res.status(200).json(patients);
});

router.post('/',newPatientParser,(req:Request<unknown,unknown,NewPatient>,res:Response<NewPatient>)=>{
    const addedPatient = patientService.addPatient(req.body);
    res.status(200).json(addedPatient);
});

router.use(errorMiddleware);

export default router;