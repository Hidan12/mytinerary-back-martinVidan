import City from "../../models/City.js"

const createCity = async (req, res, next) =>{
    try {
        const city = await City.create(req.body)
        return res.status(201).json({
            createCity: city
        })
    } catch (e) {
        next(e)
    }
}

const createManyCity = async (req, res, next) =>{
    try {
        const city = await City.insertMany(req.body)
        return res.status(201).json({
            createCity: city
        })
    } catch (e) {
        next(e)
    }
}



export {createCity, createManyCity}