import express from 'express'
import cors from 'cors'
import routes from './app/routes/index.js'

const app = express();

app.use(cors())

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/api', routes)

export default app;