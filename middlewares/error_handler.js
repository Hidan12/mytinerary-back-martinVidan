const error_handler = (req, res)=>{
    return res.status(500).json({
        error:error
    })
}

export default error_handler