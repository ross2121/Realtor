import statuscode, { StatusCodes } from "http-status-codes"
import CustomAPIError from "./customerror"
class badrequest extends CustomAPIError{
    constructor(message){
        super(message)
        this.statuscode=StatusCodes.BAD_REQUEST
    }
}
module.exports=badrequest