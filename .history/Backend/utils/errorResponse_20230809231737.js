
class errorResponse extends Response {
    constructor(message, codeStatus) {
        super(message);
        this.codeStatus = codeStatus;
    }
}

mo