import { Schema, model } from "mongoose";

const collection = "Users"
//tipo de usuario 1 admin, 2 agante de viaje, 3 usuario normal
const schema =  new Schema({
    name: {type: String, required: true},
    lastName: {type: String, required: true},
    Country: {type: String, required: true},
    mail: {type: String, required: true, unique: true},
    password: {type:String, required:true},
    google: {type: Boolean, default:false},
    photo: {type: String, required: true},
    online: {type: Boolean, required: true},
    typeUser: {type: Number, required: true},
    itineraries: [{type: Schema.Types.ObjectId, ref:"Itineraries"}]
})

const User = model(collection, schema)

export default User