type Operation = 'multiply' | 'add' | 'divide';

const multiplicator = (a:number,b:number,op:Operation) => {
    if(op === 'multiply') return a*b
    if(op === 'add') return a+b
    if(op === 'divide'){
        if(b === 0) throw new Error('Can\'t divide by 0!')
        return a/b
    }else{
        throw Error('Unknown operation')
    }
}
try{
    multiplicator(5, 8, 'multiply');
}catch(error:unknown){
    let errorMessage = 'Something went wrong. '
    if(error instanceof Error){
        errorMessage+= error.message
    }
    console.error(error)
}