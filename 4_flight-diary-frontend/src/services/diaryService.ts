import axios from "axios";
import { DiaryEntry, NewDiaryEntry } from "../types";

const baseURL = 'http://localhost:3000/api/diaries'

export const getAllDiaries = async():Promise<DiaryEntry[]>=>{
    return (await axios.get(baseURL)).data
}
export const createNewDiary = async(object:NewDiaryEntry)=>{
    return (await axios.post<DiaryEntry>(baseURL,object)).data
}

