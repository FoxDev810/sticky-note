import { INote } from "../interface/noteInterface";
import mongoose, { model } from "mongoose";

const noteSchema = new mongoose.Schema({
    description: {
        type: "string",
        required: true
    },
    color: {
        type: String,
        required: true
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const noteModel = model<INote>("Notes", noteSchema);
export default noteModel;