
class errorResponse extends Response {
    constructor(message, codeStatus) {
        super(message, codeStatus);
        this.success = false;
    }
}