import { User } from "./user.model.js"

// creating new user
const createUser = async (userData) => {
    const result = await User.create(userData)

    return result;
}


// retrieving all users
const getAllUsers = async () => {
    const result = await User.find({})

    return result;
}

// retrieving a single user
const getSingleUser = async (id) => {
    const result = await User.findOne({ id })

    return result;
}

// updating
const updateUser = async (id) => {
    const result = await User.updateOne({ id })

    return result;
}

// deleting
const deleteUser = async (id) => {
    const result = await User.deleteOne({ id })

    return result;
}

export const UserService = {
    createUser,
    getAllUsers,
    getSingleUser,
    updateUser,
    deleteUser
}