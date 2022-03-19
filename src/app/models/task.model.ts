export class TaskModel {
    public readonly id: string;
    public createdAt?: string;
    public readonly description?: string;
    public updatedAt?: string;
    public completed?: boolean;

    constructor(_id: string, _createdAt?: string, _description?: string, _updatedAt?: string, _completed?: boolean) {
        this.id = _id;
        this.createdAt = _createdAt;
        this.description = _description;
        this.updatedAt = _updatedAt;
        this.completed = _completed;
    }
}
