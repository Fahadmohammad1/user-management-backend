
import mongoose from 'mongoose';
const { Schema, model } = mongoose

const TeamSchema = new Schema({
    ownerEmail: {
        type: String,
        required: true,
    },
    members: [
        {
            memberEmail: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            }
        }
    ]
})

export const Team = model('Team', TeamSchema)

