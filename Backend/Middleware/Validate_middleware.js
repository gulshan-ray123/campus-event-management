

const validate=(schema)=>async(req,res,next)=>{
    try {  
    const parsedBody = await schema.parseAsync(req.body);
    req.body = parsedBody;
    next();

    } catch (error) {
        console.log(error);
        
        res.status(400).json({msg:"validation failed"});
    }
}
module.exports= validate;