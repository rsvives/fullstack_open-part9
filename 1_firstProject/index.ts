import express, { json } from 'express';
import { isNotNumber, parseArgsToNumberArray } from './utils';
import { bmiCalculation } from './bmiCalculator';
import { calculateExercises } from './exerciseCalculator';

const app = express();
app.use(json());

app.get('/hello',(_req,res)=>{
    res.send('<h1>Hello Full Stack</h1>');
});

app.get('/bmi',(req,res)=>{
    const {height,weight} = req.query;
    if(!height || !weight || isNotNumber(Number(height))||isNotNumber(Number(weight))){
        return res.json({error:"malformatted parameters"});
    } 
    const bmi = bmiCalculation(+height,+weight);

    return res.json({weight:+weight,height:+height,bmi});
});

app.post('/exercises',(req,res)=>{

    const {daily_exercises,target} = req.body;
    
    try{
        if(!daily_exercises || !target){
           throw new Error('missing parameters');
        }
        if(isNotNumber(target)) throw new Error('malformatted parameters');
            
        const result = calculateExercises(target as number,parseArgsToNumberArray(daily_exercises));
        res.status(200).json(result);

    }catch(error){
        if(error instanceof Error){
            res.status(400).json({error:error.message});
        }
    }
});

const PORT  = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});