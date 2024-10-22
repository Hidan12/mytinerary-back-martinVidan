import { Schema, model } from "mongoose"

const collection = "Cities"

const schema = new Schema({
    cityName:{type:String, required:true},
    countryName: {type:String, required:true},
    imgCity: {type:String, required:true},
    currencyCoin: {type:String, required:true},
    description: {type:String, required:true}
},{
    timestamps:true
})

const City = model(collection, schema)

export default City