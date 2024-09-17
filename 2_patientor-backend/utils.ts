import {z} from 'zod';
import { Gender, NewPatient } from './types';


const newPatientSchema = z.object({
    name:z.string(),
    dateOfBirth: z.string().date(),
    occupation: z.string(),
    ssn: z.string(),
    gender: z.nativeEnum(Gender)
});

export const newPatientConverter = (object:unknown):NewPatient=>{
    return newPatientSchema.parse(object);
};
