<template src="./UserList.html"></template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'axios';

@Component
export default class UserList extends Vue {
    //@Prop() private msg!: string;

    private currentPage: number;
    private totalRows: number;
    private loading: boolean = false;

    constructor(){
        super();

        this.currentPage = 1;
        this.totalRows = 0;
    }

    //Перелеснулась страница
    onPageInput(page: any){
        this.GetUserData;
    }

    //Computed:

    //Возвращает пользователей из глобального хранилища
    get getUsers(){
        return this.$store.state.users;
    }

    //Получить данные пользователей от сервера
    get GetUserData(): void{
        this.loading = true;

        this.fetchUserData()
            .then(response => {
                this.$store.commit("setUsers", response.data);
                this.totalRows = response.headers["x-total-count"];
            })
            .catch(e => console.log(e))
            .finally(() => (this.loading = false));

        return;
    }

    //Получить данные пользователей через API сервера
    private fetchUserData(){
        return axios.get("https://jsonplaceholder.typicode.com/users", {
            params: {
                _page: this.currentPage,
                _limit: 5
            }
        });
    }
    
    mounted(){
        this.GetUserData;
    }

}
</script>