import { User } from "./user.model.js"

// creating new user
const createUser = async (userData) => {
    const result = await User.create(userData)

    return result;
}


// retrieving all users
const getAllUsers = async (
    filterData,
    pagination
) => {

    const aggregations = []

    const { search, page = 1, limit = 10, ...filters } = filterData


    if (search) {
        aggregations.push({
            $or: [
                { first_name: { $regex: search, $options: 'i' } },
                { last_name: { $regex: search, $options: 'i' } },
            ]
        })
    }

    if (Object.keys(filters).length) {
        aggregations.push({
            $and: Object.entries(filters).map(([field, value]) => ({
                [field]: value
            }))
        })
    }

    const conditions = aggregations.length > 0 ? { $and: aggregations } : {}

    const result = await User.find(conditions).skip((page - 1) * limit).limit(limit)

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