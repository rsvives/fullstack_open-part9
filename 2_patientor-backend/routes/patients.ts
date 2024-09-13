import { Response, Router } from "express";
import { getAllWithoutSSN } from "../services/patientsService";
import { PatientWithoutSSN } from "../types";

const router = Router();

router.get('/',(_req,res:Response<PatientWithoutSSN[]>)=>{
    const patients = getAllWithoutSSN();
    res.status(200).json(patients);
});

export default router;