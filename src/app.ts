import express, {Application, Request, Response, NextFunction} from 'express'

const app : Application= express();

app.use('/', (req: Request, res: Response, next : NextFunction) => {
    res.send('Hello from express!!')
})

app.listen(8000,()=>{
    console.log('listening to requests on port 8000')
})