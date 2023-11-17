import { User } from "../user/user.model.js"

const login = async (loginData) => {
    const findUser = await User.findOne()
} 