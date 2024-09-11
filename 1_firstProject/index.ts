import express from 'express'
import { isNotNumber } from './utils'
import { bmiCalculation } from './bmiCalculator'
const app = express()

app.get('/hello',(_req,res)=>{
    res.send('<h1>Hello Full Stack</h1>')
})
app.get('/bmi',(req,res)=>{
    const {height,weight} = req.query
    if(!height || !weight || isNotNumber(Number(height))||isNotNumber(Number(weight))){
        return res.json({error:"malformatted parameters"})
    } 
    const bmi = bmiCalculation(+height,+weight)

    return res.json({weight:+weight,height:+height,bmi})
})

const PORT  = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})