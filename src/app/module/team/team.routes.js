import express from 'express'
import { TeamController } from './team.controller.js'

const router = express.Router()

router.post('/', TeamController.createTeam)

export const TeamRoutes = router