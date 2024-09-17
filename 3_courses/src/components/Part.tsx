import { CoursePart } from "../types"
import { assertNever } from "../utils"

const Part = ({part}:{part:CoursePart})=>{
    switch (part.kind){
        case 'basic':
            return <p>{part.name} {part.exerciseCount} <i>{part.description}</i> </p> 
        case 'group':
            return <p>{part.name} {part.exerciseCount}{part.groupProjectCount}</p>
        case 'background':
            return <p>{part.name} {part.exerciseCount} <i>{part.description}</i>{part.backgroundMaterial}</p>
        case 'special':
            return <p>{part.name} {part.exerciseCount} required skills: {part.requirements.join(',')}</p>
        
        default:
            return assertNever(part)

    }
}

export default Part