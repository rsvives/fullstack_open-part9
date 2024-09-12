import {Router} from 'express';
import { getAll } from '../services/diagnosesService';

const router = Router();

router.get('/',(_req,res)=>{
    const diagnoses = getAll();
    res.json(diagnoses);
});

export default router;