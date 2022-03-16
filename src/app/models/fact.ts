export class FactModel {
    public readonly createdAt: string;
    public readonly text: string;
    public readonly type: string;
    public readonly updatedAt: string;

    constructor(createdAt: string, text: string, type: string, updatedAt: string) {
        this.createdAt = createdAt;
        this.text = text;
        this.type = type;
        this.updatedAt = updatedAt;
    }
}
