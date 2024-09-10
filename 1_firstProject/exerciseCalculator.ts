import {  parseArgsToNumberArray } from "./utils"

interface ResultObjetc {
    periodLength: number
    trainingDays: number
    success: boolean
    rating: number
    ratingDescription: string
    target: number
    average: number
  }
  

const calculateExercises = (args:number[] ):ResultObjetc=>{
   
    const [target, ...dailyTrainingHoursArray] =args
    console.log(target,dailyTrainingHoursArray)
    const average = dailyTrainingHoursArray.reduce((accum,current)=>accum+=current)/dailyTrainingHoursArray.length

    const rating =()=> {
        if(average>=target) return 3
        if(average>= target/2) return 2
        return 1
    }
    
    const ratingDescription = {
        1:"You need to train more/harder",
        2: "Not too bad, but could be better",
        3: "You are doing great, keep it up"
    }

    let result ={
        periodLength:dailyTrainingHoursArray.length,
        trainingDays:dailyTrainingHoursArray.filter(el=>el!==0).length,
        success:dailyTrainingHoursArray.every(el=>el>=target) || average>=target,
        rating:rating(),
        ratingDescription:ratingDescription[rating()],
        target,
        average: Number(average.toFixed(3))
    }

    return result

    
}
try{
    const [first,second, ...data]= process.argv
    console.log(calculateExercises(parseArgsToNumberArray(data)))
}catch (error: unknown) {
    let errorMessage = 'Something bad happened.'
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    console.error(errorMessage);
}