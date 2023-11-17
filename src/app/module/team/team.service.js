import { Team } from "./team.model.js";
import { User } from "./user.model.js"

// creating new team
const createTeam = async (data) => {
    const result = await Team.create(data)

    return result;
}


// retrieving all the team members
const getTeam = async () => {
    const result = await Team.find({})

    return result;
}

// delete member from the team
const deleteTeamMember = async (memberId) => {
    const result = await Team.deleteOne({ memberId })

    return result;
}


// deleting
const deleteTeam = async (id) => {
    const result = await User.deleteOne({ id })

    return result;
}

export const TeamService = {
    createTeam,
    getTeam,
    deleteTeam,
    deleteTeamMember
}