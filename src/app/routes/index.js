
import express from 'express'
import { UserRoutes } from '../module/user/user.routes.js';

const router = express.Router();

const moduleRoutes = [
    {
        path: '/users',
        route: UserRoutes
    }
]

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;