import { TeamService } from "./team.service.js"

const createTeam = async (req, res) => {
    const result = await TeamService.createTeam(req.body)

    res.send({
        status: 200,
        message: 'Added to team',
        data: result
    })
}
const getTeam = async (req, res) => {
    const result = await TeamService.getTeam()

    res.send({
        status: 200,
        message: 'Team retrieved Successfully',
        data: result
    })
}


const deleteTeam = async (req, res) => {
    const { id } = req.params
    const result = await TeamService.deleteTeam(id)

    res.send({
        status: 200,
        message: 'Team deleted Successfully',
        data: result
    })
}

const deleteTeamMember = async (req, res) => {
    const { id } = req.params
    const result = await TeamService.deleteTeam(id)

    res.send({
        status: 200,
        message: 'Member deleted Successfully',
        data: result
    })
}

export const UserController = {
    createTeam,
    getTeam,
    deleteTeam,
    deleteTeamMember
}