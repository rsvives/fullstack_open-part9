import { z } from "zod";

export interface Entry{
    description:string;
    creation: string;
    specialist: string;
    diagnosis: string[];

}

export type Diagnosis = {
    code: string,
    name: string,
    latin?: string 
};

export enum Gender{
    Male='male',
    Female='female',
    Other='other'

}
export const NewPatientSchema = z.object({
    name:z.string(),
    dateOfBirth: z.string().date(),
    occupation: z.string(),
    ssn: z.string(),
    gender: z.nativeEnum(Gender)
});

export type NewPatient = z.infer<typeof NewPatientSchema>;
export interface Patient extends NewPatient  {
    id:          string;
    entries: Entry[]
};

export type PatientWithoutSSN = Omit<Patient,'ssn' | 'entries'>;
