import { NextFunction, Request, Response } from "express";
import { NewPatientSchema } from "./types";
import { z } from "zod";

export const newPatientParser = (req:Request,_res:Response,next:NextFunction)=>{
    try{
        NewPatientSchema.parse(req.body);
        next();
    }catch(error:unknown){
        next(error);
    }
};

export const errorMiddleware = (error:unknown,_req:Request,res:Response,next:NextFunction)=>{

    if(error instanceof z.ZodError){
        res.status(400).json({error:error.issues});
    }else{
        next(error);
    }

};