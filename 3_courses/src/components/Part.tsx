import { CoursePart } from "../types"
import { assertNever } from "../utils"

const Part = ({part}:{part:CoursePart})=>{
    switch (part.kind){
        case 'basic':
            return <p>{part.name}</p>
        case 'group':
            return <p>{part.name}</p>
        case 'background':
            return <p>{part.name}</p>
        case 'special':
            return <p>{part.name}</p>
        
        default:
            return assertNever(part)

    }
}

export default Part