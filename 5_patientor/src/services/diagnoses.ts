import axios from "axios";
import { apiBaseUrl } from "../constants";
import { Diagnosis } from "../types";


const getAll = async ()=>{
    const {data} = await axios.get<Diagnosis[]>(`${apiBaseUrl}/diagnoses`);
    return data;
};


const getByCodes = async (codes:Array<Diagnosis['code']>)=>{
    const all = await getAll();
    const map = new Map();
    const data =  all.filter(diagnosis => {
        if(codes.includes(diagnosis.code)) {
            map.set(diagnosis.code,diagnosis);
            return true;
        }
    });
    return{data,map};

};


export default {
    getAll,
    getByCodes
};