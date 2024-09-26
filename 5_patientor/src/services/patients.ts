import axios from "axios";
import { EntryWithoutId, Patient, PatientFormValues } from "../types";

import { apiBaseUrl } from "../constants";

const getAll = async () => {
  const { data } = await axios.get<Patient[]>(
    `${apiBaseUrl}/patients`
  );

  return data;
};

const getById = async (id:string | undefined)=>{
  const {data} = await axios.get<Patient>(`${apiBaseUrl}/patients/${id}`);
  return data;
};

const create = async (object: PatientFormValues) => {
  const { data } = await axios.post<Patient>(
    `${apiBaseUrl}/patients`,
    object
  );

  return data;
};


const addEntry = async(patienId:string,entry:EntryWithoutId)=>{
  console.log('adding entry', patienId,entry);
  const addedEntry = await axios.post(`${apiBaseUrl}/patients/${patienId}/entries`,entry);
  // console.log(addedEntry);
  return addedEntry;
};

export default {
  getAll, getById, create, addEntry
};

