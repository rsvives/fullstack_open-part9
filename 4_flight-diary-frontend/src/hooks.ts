import {   useState } from "react"

export const useField = (inputType:string)=>{
    
    const [value,setValue]= useState<string>('')
    
    const onChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        setValue((event.target).value)
    }

    // const reset = ()=>{ setValue('')}
    return{
        input:{
            type:inputType,
            value,
            onChange
        },
        // reset
    }
}