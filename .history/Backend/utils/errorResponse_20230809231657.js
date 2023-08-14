
class errorResponse extends Response {
    constructor(message, codeStat) {
        super(message, code);
        this.success = false;
    }
}