import CustomAPIError from "./customerror";
import { StatusCodes } from "http-status-codes";
class unauthonticated extends CustomAPIError{
    constructor(message){
        super(message)
        this.StatusCodes=StatusCodes.UNAUTHORIZED

    }
}
module.exports=unauthonticated;