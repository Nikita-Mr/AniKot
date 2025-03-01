import {Schema, model} from "mongoose"

const AnimeSchema = new Schema({
    text: String,
    sender: String,
    receiver: String,
})

export const Anime = model("Anime", AnimeSchema)