import { Schema, model } from "mongoose";
import { getCurrentTime } from "../utills/utills.js";


const userSchema = new Schema({
    email: {type: String, require: true},
    name: {type: String, require: true},
    address: {type: String},
    createAt: {type: String, default: getCurrentTime},
    updateAt: {type: String, default: getCurrentTime},

})

//model('객체명', 스키마, '컬렉션 테이블명');
export default model("User", userSchema, "users")