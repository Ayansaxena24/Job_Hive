
class errorResponse extends Response {
    constructor(message, ) {
        super(message, code);
        this.success = false;
    }
}