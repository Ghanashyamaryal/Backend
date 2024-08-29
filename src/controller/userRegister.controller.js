import asyncHandler from "../utils/asyncHandler.js"

const userRegistration = asyncHandler(async (req,res,next)=>{
    res.status(200).json({
        "message":"hello",
        "name":"anjan"
        "gender":"male"
    })
})

export {userRegistration}