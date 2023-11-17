
import express from 'express'
import { UserRoutes } from '../module/user/user.routes.js';
import { AuthRoutes } from '../module/auth/auth.routes.js';
import { TeamRoutes } from '../module/team/team.routes.js';

const router = express.Router();

const moduleRoutes = [
    {
        path: '/auth',
        route: AuthRoutes
    },
    {
        path: '/users',
        route: UserRoutes
    },
    {
        path: '/team',
        route: TeamRoutes
    }
]

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;