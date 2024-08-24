
class ResponseMsg {
    constructor(
        statusCode,
        data,
        message = "successfully data send") {
       
            this.statusCode = statusCode;
            this.data = data;
            this.message = message
    }
}
export {ResponseMsg}