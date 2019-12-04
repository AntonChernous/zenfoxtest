<template src="./UsersToDo.html"></template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import User from '../../model/user';
import UserToDoList from '@/components/UserToDoList/UserToDoList.vue'

@Component({components: {
    UserToDoList
}})
export default class UsersToDo extends Vue{
    
    //Возвращает имя пользователя
    get getUserName(): string{
        
        let userId: number = +(this.$route.params.id);
        let user: User = this.$store.getters.getUserById(userId);

        return user.Name;
    }

    //Назад
    goBack(): void{
        this.$router.go(-1);
    }

}
</script>

<style scoped>
    #usersToDo{
        max-width: 800px;
        margin: auto;
    }

    .linkButton{
        width: 100px;
        margin-top: 15px;
        margin-bottom: 15px;
    }
</style>