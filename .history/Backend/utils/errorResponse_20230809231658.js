
class errorResponse extends Response {
    constructor(message, codeStatus) {
        super(message, code);
        this.success = false;
    }
}