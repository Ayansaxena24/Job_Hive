
class errorResponse extends Response {
    constructor(message, code) {
        super(message, code);
        this.success = false;
    }
}