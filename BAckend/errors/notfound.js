import { StatusCodes } from "http-status-codes";
import CustomAPIError from "./customerror";
class notfound extends CustomAPIError{
    constructor(message){
        super(message);
        this.StatusCodes=StatusCodes.NOT_FOUND

    }
}
module.exports=notfound