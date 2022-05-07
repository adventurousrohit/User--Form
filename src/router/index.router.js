const express= require("express")
const router=express.Router()
const {form}= require("../controller/index.controllr")
const {validateForm,isRequestValidated} = require('../validator/validator')

router.post("user/form",validateForm,isRequestValidated,form)

module.exports=router