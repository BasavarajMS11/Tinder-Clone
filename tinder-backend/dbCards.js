import mongoose from "mongoose";

const cardSChema = mongoose.Schema({
    name: String,
    imgUrl: String
})

export default mongoose.model('cards', cardSChema);