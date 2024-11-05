

const validateBody = (body, errors, regexId, regexProp, regexWeb)=>{
    for (const key in body) {
        if (key.includes("img") || key.includes("photo")) {
            regexWeb.test(body[key]) ? "" : errors.push({error:"The link entered does not match the expected URL format", prop:key})         
        }else{
            key == "_id" ? regexId.test(body[key]) ? "":errors.push({error:"Incorrect id format", prop: key}) 
                :
            regexProp.test(body[key]) ? "" : errors.push({error: "Incorrect information format", prop:key}) 
        }
        
    }
}

const validator_body = (req,res, next) =>{
    const regexWeb =  new RegExp("^(https?:\\/\\/)?([\\w.-]+)\\.([a-zA-Z]{2,})([\\/\\w .%=&-]*)*(\\?.*)?$", "i")
    const regexProp = new RegExp("^[A-Za-z0-9 ,.'’\"#-]+$", "i")
    const regexId = /^[0-9a-fA-F]{24}$/
    let errors = []
    
    if (Array.isArray(req.body) && req.body.length >= 1) {
        req.body.forEach(body => {
            validateBody(body, errors, regexId,regexProp,regexWeb)               
        });
    }else if(typeof req.body === 'object' && req.body != null){
        validateBody(req.body, errors, regexId, regexProp,regexWeb)
    }
    else{
        errors.push({error:"Empty or null bodies are not accepted"})
    }
    
    if (errors.length > 0) {
        return res.status(400).json(errors)
    }
    next()
}
export default validator_body