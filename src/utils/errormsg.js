
class ErrorMsg extends Error {
    constructor(
        statusCode,
        message = "Error during data sending",
        error=[]) 
        
        {
            super(message)
            this.statusCode = statusCode;
            this.error = error;
            this.message = message
    }
}
export {ResponseMsg}