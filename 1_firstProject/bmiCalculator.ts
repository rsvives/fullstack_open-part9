type bodyType ='Underweight (Severe thinness)' |
'Underweight (Moderate thinness)' |
'Underweight (Mild thinness)' |
'Normal range' |
'Overweight (Pre-obese)' |
'Obese (Class I)' |
'Obese (Class II)' |
'Obese (Class III)' 

const bmiCalculation = (height:number,weight:number):bodyType=>{
    const bmi = weight/Math.pow(height/100,2)
    let result : bodyType = null

    if(bmi<16){
        result = 'Underweight (Severe thinness)'
    }else if(bmi>=16 && bmi<17){
        result = 'Underweight (Moderate thinness)'
    }else if(bmi>=17 && bmi<18.5){
        result = 'Underweight (Mild thinness)'
    }else if(bmi>=18.5 && bmi<25){
        result = 'Normal range'
    }else if(bmi>=25 && bmi<30){
        result = 'Overweight (Pre-obese)'
    }else if(bmi>=30 && bmi<35){
        result = 'Obese (Class I)'
    }else if(bmi>=35 && bmi<40){
        result = 'Obese (Class II)'
    }else{
        result = 'Obese (Class III)'
    }
    return result
}

console.log(bmiCalculation(175,75))