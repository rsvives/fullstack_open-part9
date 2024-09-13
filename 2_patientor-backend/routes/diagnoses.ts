import {Response, Router} from 'express';
import { getAll } from '../services/diagnosesService';
import { Diagnosis } from '../types';

const router = Router();

router.get('/',(_req,res:Response<Diagnosis[]>)=>{
    const diagnoses = getAll();
    res.json(diagnoses);
});

export default router;