import { Schema, model } from "mongoose"

const collection = "Itineraries"

const schema = new Schema({
    photoItinerary: {type:String, required:true},
    nameItinerary: {type:String, required:true},
    price: {type:Number, required:true},
    duration: {type:Number, required:true},
    likes: {type:Number, required:true},
    hashtags: {type:Array, required:true},
    messages: {type: Schema.Types.ObjectId},
    city: {type: Schema.Types.ObjectId, ref: "Cities", required:true},
    user: {type: Schema.Types.ObjectId, ref: "Users", required:true}
},{
    timestamps:true
})

const Itinerary = model(collection, schema)
export default Itinerary