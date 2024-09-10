import express from 'express'
const app = express()

app.get('/hello',(_req,res)=>{
    res.send('<h1>Hello Full Stack</h1>')
})

const PORT  = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})