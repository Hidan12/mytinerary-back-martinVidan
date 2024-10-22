const not_found_handler = (req, res, next) =>{
    return res.status(404).json({
        success: false,
        msg: "The route entered does not match the endpoints"
    })
}

export default not_found_handler