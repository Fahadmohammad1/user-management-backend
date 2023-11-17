import { AuthService } from "./auth.service.js"

const login = async (req, res) => {
    const result = await AuthService.login(req.body)

    res.send({
        status: 200,
        message: 'Login Successfull',
        data: result
    })

}

export const AuthController = {
    login
}