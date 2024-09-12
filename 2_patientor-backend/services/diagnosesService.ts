import data from "../data/diagnoses";
import { Diagnosis } from "../types";

export const getAll = ():Diagnosis[]=>{
    return data;
};