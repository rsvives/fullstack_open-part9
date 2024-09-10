export const isNotNumber = (argument:any):boolean=>isNaN(Number(argument))

export const parseArgsToNumberArray = (array:string[]):number[]=>{
    return array.map((el,i)=>{
        if(isNotNumber(el)) throw new Error(`"${el}" is not a number. Invalid argument index: ${i}`) 
        return Number(el)
    })
}

export const extractDataFromCommandLine = ():string[]=>{
    const[first,second,...data] = process.argv
    return data
}