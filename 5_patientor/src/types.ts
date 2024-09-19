export interface Diagnosis {
  code: string;
  name: string;
  latin?: string;
}

export enum Gender {
  Male = "male",
  Female = "female",
  Other = "other"
}

export interface Patient {
  id: string;
  name: string;
  occupation: string;
  gender: Gender;
  ssn?: string;
  dateOfBirth?: string;
  entries: []|Entry[]
}

export type PatientFormValues = Omit<Patient, "id" | "entries">;


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
}

export type Entry =
 HospitalEntry
| OccupationalHealthcareEntry
| HealthCheckEntry;

// // Define special omit for unions
// type UnionOmit<T, K extends string | number | symbol> = T extends unknown ? Omit<T, K> : never;
// // Define Entry without the 'id' property
// type EntryWithoutId = UnionOmit<Entry, 'id'>;