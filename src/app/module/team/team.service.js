import { Team } from "./team.model.js";

// creating new team
const createTeam = async (data) => {
    const findTeam = await Team.findOne({ ownerEmail: data.ownerEmail })

    let result = null

    if (findTeam) {
        console.log(findTeam);
        result = await Team.updateOne({ ownerEmail: data.ownerEmail },
            {
                $push: {
                    members: data.members[0]
                }
            })
    }
    else {
        result = await Team.create(data)
    }

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
    const result = await Team.deleteOne({ id })

    return result;
}

export const TeamService = {
    createTeam,
    getTeam,
    deleteTeam,
    deleteTeamMember
}