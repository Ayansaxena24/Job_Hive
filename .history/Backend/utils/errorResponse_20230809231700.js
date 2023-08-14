
class errorResponse extends Response {
    constructor(message, codeStatus) {
        super(message, codeS);
        this.success = false;
    }
}