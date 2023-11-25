import { Document } from "mongoose";

export interface INote extends Document{
    _id: string,
    description: string,
    color: string,
    updatedAt: Date
};