import express,{json} from 'express';
import cors from 'cors';

import diagnosesRouter from './routes/diagnoses';

const app = express();

app.use(json());
app.use(cors());

app.get('/api/ping',(req,res)=>{
    console.log(`someone just pinged with ${req.ip}`);
    res.send('<h1>Pong</h1>');
});

app.use('/api/diagnoses',diagnosesRouter);

const PORT = process.env.PORT || 3001; 

app.listen(PORT,()=>{
    console.log(`server listening on port ${PORT}`);
});