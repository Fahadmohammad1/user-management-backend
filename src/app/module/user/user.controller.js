import { UserService } from "./user.service.js"

const createUser = async (req, res) => {
    const result = await UserService.createUser(req.body)

    res.send({
        status: 200,
        message: 'Successfull',
        data: result
    })
}
const getAllUser = async (req, res) => {

    const result = await UserService.getAllUsers(req.query)

    res.send({
        status: 200,
        message: 'Successfull',
        data: result
    })
}
const getSingleUser = async (req, res) => {
    const { id } = req.params

    const result = await UserService.getSingleUser(id)

    res.send({
        status: 200,
        message: 'Successfull',
        data: result
    })
}
const updateUser = async (req, res) => {
    const { id } = req.params
    const result = await UserService.updateUser(id)

    res.send({
        status: 200,
        message: 'Successfull',
        data: result
    })
}

const deleteUser = async (req, res) => {
    const { id } = req.params
    const result = await UserService.createUser(id)

    res.send({
        status: 200,
        message: 'Successfull',
        data: result
    })
}

export const UserController = {
    createUser,
    getAllUser,
    getSingleUser,
    updateUser,
    deleteUser
}