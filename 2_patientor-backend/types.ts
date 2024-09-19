import { z } from "zod";



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
    gender: z.nativeEnum(Gender),
    // entries: Entry[]
});

export type NewPatient = z.infer<typeof NewPatientSchema>;
export interface Patient extends NewPatient  {
    id:          string;
    entries:     Entry[]
};

export type PatientWithoutSSN = Omit<Patient,'ssn' | 'entries'>;

interface BaseEntry {
    id: string;
    description: string;
    date: string;
    specialist: string;
    diagnosisCodes?: Array<Diagnosis['code']>;
  }

  export enum HealthCheckRating {
    "Healthy" = 0,
    "LowRisk" = 1,
    "HighRisk" = 2,
    "CriticalRisk" = 3
  }
  
  interface HealthCheckEntry extends BaseEntry {
    type: 'HealthCheck';
    healthCheckRating: HealthCheckRating;
  }
type Discharge = {
    date: string,
    criteria: string
};
interface HospitalEntry extends BaseEntry{
    type: 'Hospital';
    discharge: Discharge;
}
type SickLeave ={
    startDate: string,
    endDate: string
};
interface OccupationalHealthcareEntry extends BaseEntry{
    type:'OccupationalHealthcare';
    employerName:string;
    sickLeave: SickLeave;
};

  export type Entry =
   HospitalEntry
  | OccupationalHealthcareEntry
  | HealthCheckEntry;

// // Define special omit for unions
// type UnionOmit<T, K extends string | number | symbol> = T extends unknown ? Omit<T, K> : never;
// // Define Entry without the 'id' property
// type EntryWithoutId = UnionOmit<Entry, 'id'>;