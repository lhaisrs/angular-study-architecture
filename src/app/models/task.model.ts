export class FactModel {
    private readonly id: string;
    public readonly createdAt: string;
    public readonly description: string;
    public readonly updatedAt: string;
    public readonly completed: boolean;

    constructor(_id: string, _createdAt: string, _description: string, _updatedAt: string, _completed: boolean) {
        this.id = _id;
        this.createdAt = _createdAt;
        this.description = _description;
        this.updatedAt = _updatedAt;
        this.completed = _completed;
    }
}
