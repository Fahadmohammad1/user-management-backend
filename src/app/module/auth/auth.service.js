import { User } from "../user/user.model.js"

const login = async (loginData) => {
    const { email, password } = loginData
    const findUser = await User.findOne({ email })

    if (!findUser) {
        throw new Error('User not found')
    }

    if (findUser && !findUser.password === password) {
        throw new Error('Password is incorrect')
    }

    return findUser;
}

export const AuthService = {
    login
}