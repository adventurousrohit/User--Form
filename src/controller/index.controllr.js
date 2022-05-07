const {validationResult}= require("express-validator")
const User= require('../model/user.modal')

exports.form= async (req,res)=>{
    try{
        // const error= validationResult(req)
        // if(!error.isEmpty()){
        //     return res.status(400).json({errors:error.array()})
        // }
        const user = User.findOne(req.body.email)
        if(user){
            res.status(201).json({
                message:"email exist"
            })
        }
        const data= await new User({
            Username:req.body.username,
            email:req.body.email,
            phone:req.body.phone,
            description:req.body.description
        })

        await data.save((error,result)=>{
            if(result){
                res.status(200).json(result)
            }
            else{
                console.log(error)
            }
        })
        // const data



    }catch(e){next(e)}

}