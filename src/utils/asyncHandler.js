
const asyncHandler = (fn)=> async (req,res,next)=>{
    try {
        fn(req,res,next)
        
    } catch (error) {
        console.log("error at async handler:")
        res.send(err.message)
    }
}
// const asyncHandler = (requestHandler) => {
//     return (req, res, next) => {
//         Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
//     }
// }

export default asyncHandler;