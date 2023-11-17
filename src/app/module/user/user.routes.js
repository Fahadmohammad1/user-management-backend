
import express from 'express'
import { UserController } from './user.controller.js';

const router = express.Router();

router.get('/:id', UserController.getSingleUser)
router.get('/', UserController.getAllUser)

router.post('/', UserController.createUser)

router.put('/:id', UserController.updateUser)
router.put('/:id', UserController.deleteUser)

export const UserRoutes = router