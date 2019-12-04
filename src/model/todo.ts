//To do
export default class Todo{
    Id: number;
    Title: string;
    Completed: boolean;

    constructor(todoId: number, todoTitle: string, todoCompleted: boolean){
        this.Id = todoId;
        this.Title = todoTitle;
        this.Completed = todoCompleted;
    }
}