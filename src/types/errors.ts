export class GenericError extends Error {
    name = "GenericError"
    status = 400

    constructor(name: string, message: string, status: number) {
        super(message)

        this.name = name
        this.status = status
    }
}