export class FactModel {
    private readonly id: string;
    public readonly createdAt: string;
    public readonly text: string;
    public readonly updatedAt: string;

    constructor(_id: string, _createdAt: string, _text: string, _updatedAt: string) {
        this.id = _id;
        this.createdAt = _createdAt;
        this.text = _text;
        this.updatedAt = _updatedAt;
    }
}
