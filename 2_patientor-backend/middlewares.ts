import { NextFunction, Request, Response } from "express";
import { NewEntrySchema, NewPatientSchema } from "./types";
import { z } from "zod";

export const newPatientParser = (req:Request,_res:Response,next:NextFunction)=>{
    try{
        NewPatientSchema.parse(req.body);
        next();
    }catch(error:unknown){
        next(error);
    }
};

export const newEntryParser = (req:Request, _res:Response, next:NextFunction)=>{
    try{
        NewEntrySchema.parse(req.body);
        next();
    }catch(error:unknown){
        next(error);
    }
};


export const errorMiddleware = (error:unknown,_req:Request,res:Response,next:NextFunction)=>{

    if(error instanceof z.ZodError){
        console.error(error);
        res.status(400).json({error:error.issues});
    }else{
        next(error);
    }

};