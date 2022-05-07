const {check,validationResult}= require("express-validator")

exports.validateForm=[

    check("fname").isEmpty()
    .withMessage("Name is required"),
    check("email").isEmail()
    .withMessage("valid Email is required"),

    check("phone").isMobilePhone()
    .withMessage("Required valid mobile number"),

    check("description").isEmpty()
    .withMessage("Wite Some about you")
]

exports.isRequestValidated=(req,res,next)=>{
    const errors=validationResult(req)
    if(errors.array().length>0){
        return res.status(400).json({errors:errors.array()[0].msg})
    }
    next()
}