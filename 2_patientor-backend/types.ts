import { z } from "zod";


export const DiagnosisSchema = z.object({
    code: z.string(),
    name: z.string(),
    latin: z.string().optional() 
});

export type Diagnosis = z.infer<typeof DiagnosisSchema>;

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




  
//   interface HealthCheckEntry extends BaseEntry {
//     type: 'HealthCheck';
//     healthCheckRating: HealthCheckRating;
//   }


// type Discharge = z.infer<typeof DischargeSchema>;
// interface HospitalEntry extends BaseEntry{
//     type: 'Hospital';
//     discharge: Discharge;
// }

// interface OccupationalHealthcareEntry extends BaseEntry{
//     type:'OccupationalHealthcare';
//     employerName:string;
//     sickLeave: SickLeave;
// };




export const BaseEntrySchema = z.object({
    // id:z.string(),
    description:z.string(),
    date: z.string().date(),
    specialist: z.string(),
    diagnosisCodes: z.array(DiagnosisSchema.shape.code).optional()
});


 const DischargeSchema = z.object({
    date: z.string().date(),
    criteria: z.string()
});

 export const HospitalEntrySchema = BaseEntrySchema.extend({
    type: z.literal('Hospital'),
    discharge:DischargeSchema
});

// type HospitalEntry = z.infer<typeof HospitalEntrySchema>;

export enum HealthCheckRating {
    "Healthy" = 0,
    "LowRisk" = 1,
    "HighRisk" = 2,
    "CriticalRisk" = 3
  }

export const HealthCheckEntrySchema = BaseEntrySchema.extend({
    type: z.literal('HealthCheck'),
    healthCheckRating: z.nativeEnum(HealthCheckRating)
});

// type HealthCheckEntry = z.infer<typeof HealthCheckEntrySchema>;

const SickLeaveSchema =z.object({
    startDate: z.string(),
    endDate: z.string()
});

export const OccupationalHealthcareEntrySchema = BaseEntrySchema.extend({
    type: z.literal('OccupationalHealthcare'),
    employerName: z.string(),
    sickLeave: SickLeaveSchema
});

// type OccupationalHealthcareEntry = z.infer<typeof OccupationalHealthcareEntrySchema>;

// export type NewEntry =
// HospitalEntry
// | OccupationalHealthcareEntry
// | HealthCheckEntry;

export const NewEntrySchema = HospitalEntrySchema.or(HealthCheckEntrySchema).or(OccupationalHealthcareEntrySchema);

export type NewEntry = z.TypeOf<typeof NewEntrySchema>;
export type Entry = NewEntry & {
    id: string;
};

// // Define special omit for unions
// type UnionOmit<T, K extends string | number | symbol> = T extends unknown ? Omit<T, K> : never;
// // Define Entry without the 'id' property
// export type EntryWithoutId = UnionOmit<Entry, 'id'>;

