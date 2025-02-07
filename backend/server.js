import express from 'express'
import { json, urlencoded } from 'express'
import usersRoutes from './routes/users.routes.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectToMongo } from './db/connectToMongo.js'

dotenv.config()
const app = express()

const PORT = process.env.PORT

app.use(json())
app.use(urlencoded(true))
app.use(cors())
app.use(cookieParser())

app.use("/api/users", usersRoutes)

app.listen(PORT, async() => {
    console.log("Server running on port "+PORT);
    await connectToMongo()
    
})