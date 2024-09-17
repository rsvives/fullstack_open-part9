type coursePart ={
    name:string,
    exerciseCount: number
}

const Content = ({courseParts}:{courseParts:coursePart[]})=>{
    return (
        courseParts.map(part=>{
            return <p key={part.name}>{part.name} | Exercises: {part.exerciseCount}</p>
        })
    )
}
export default Content