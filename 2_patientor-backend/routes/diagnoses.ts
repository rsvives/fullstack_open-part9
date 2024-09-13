import {Response, Router} from 'express';
import diagnosesService from '../services/diagnosesService';
import { Diagnosis } from '../types';

const router = Router();

router.get('/',(_req,res:Response<Diagnosis[]>)=>{
    const diagnoses =diagnosesService.getAll();
    res.json(diagnoses);
});

export default router;