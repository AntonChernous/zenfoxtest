<template src="./UserToDoList.html"></template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Todo from '../../model/todo';
import axios from 'axios';

@Component
export default class UserToDoList extends Vue{
    @Prop({required: true})
    public readonly userId!: number;

    private todos: Array<Todo> = new Array();
    private loading: boolean = false;

    mounted(){
        this.getToDoData();
    }

    //Получить данные ToDo от сервера
    private getToDoData(): void{
        this.loading = true;

        this.todos = [];

        this.fetchToDoData()
            .then(response => {
                let objects: Array<object> = response.data;
                
                for(const obj of objects){
                    let todo: Todo = new Todo((obj as any)["id"],
                        (obj as any)["title"],
                        (obj as any)["completed"]);
                    this.todos.push(todo);
                }
            })
            .catch(e => console.log(e))
            .finally(() => this.loading = false);
    }

    //Получить данные ToDo через API сервера
    private fetchToDoData(){
        return axios.get("https://jsonplaceholder.typicode.com/todos", {
            params: {
                userId: this.userId
            }
        });
    }
}
</script>

<style scoped>
    #imgCompleted{
        height: 32px;
    }
</style>