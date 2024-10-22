import City from "../../models/City.js"

const allCity = async (req,res,next) =>{
    try {
        
        const query = req.query.search ? {cityName: {$regex: '^'+req.query.search, $options:'i'}}:{}
        const cities = await City.find(query)

        return res.status(200).json({
            length: cities.length,
            cities: cities
        })
    } catch (e) {
        next(e)
    }
}

const cityById = async(req, res, next) =>{
    try {
        console.log(req.params.id);
        
        const city = await City.findById(req.params.id)
        return res.status(200).json({
            city: city
        })
    } catch (e) {
        next(e)
    }
}

export {allCity, cityById}