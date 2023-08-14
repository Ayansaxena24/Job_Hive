
class errorResponse extends Response {
    constructor(message, codeStatus) {
        super(message);
        this.success = false;
    }
}