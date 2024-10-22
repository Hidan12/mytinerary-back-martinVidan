const error_handler = (error, req, res)=>{
    return res.status(500).json({
        error:error
    })
}

export default error_handler