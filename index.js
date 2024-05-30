import dotenv from 'dotenv'

import { app } from './app.js'

import { connectDB } from './db/index.js'


dotenv.config({
    path:'./env'
})
connectDB()
    .then(
        app.listen(process.env.PORT || 1200, () => {
            console.log(`server is running at ${process.env.PORT}`)
            
        })
    ).catch((err) => {
        console.log("mongo db connection failed!!!",err)
    })
    
