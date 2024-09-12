export const isNotNumber = (argument:string|boolean|number|undefined|null):boolean=>isNaN(Number(argument));

export const parseArgsToNumberArray = (array:(string|number|boolean)[]):number[]=>{
    return array.map((el,i)=>{
        if(isNotNumber(el)) throw new Error(`"${el}" is not a number. Invalid argument index: ${i}`); 
        return Number(el);
    });
};

export const extractDataFromCommandLine = ():string[]=>{
    const[_first,_second,...data] = process.argv;
    return data;
};
