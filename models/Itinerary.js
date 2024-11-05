import { Schema, model } from "mongoose"

const collection = "Itineraries"

const schema = new Schema({
    photoUser: {type:String, required:true},
    photoItinerary: {type:String, required:true},
    nameUser: {type:String, required:true},
    nameItinerary: {type:String, required:true},
    price: {type:Number, required:true},
    duration: {type:Number, required:true},
    likes: {type:Number, required:true},
    hashtags: {type:Array, required:true},
    city:{type: Schema.Types.ObjectId, ref: "Cities", required:true}
},{
    timestamps:true
})

const Itinerary = model(collection, schema)
export default Itinerary