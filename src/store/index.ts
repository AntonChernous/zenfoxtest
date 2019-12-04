import Vue from 'vue'
import Vuex from 'vuex'
import User from "../model/user"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        //Пользователи
        users: Array<User>()
    },
    mutations: {
        //Установить пользователей из объекта
        setUsers(state, objects: Array<object>){
            state.users = [];
            
            for(const obj of objects) {
                let user = new User((<any>obj)["id"],
                    (<any>obj)["name"],
                    (<any>obj)["email"],
                    (<any>obj)["phone"]);
                state.users.push(user);
            }
      }
    },
    getters: {
        //Получить пользователя по его Id
        getUserById(state, getters){
            return (id: number): User | undefined => {
                return state.users.find((user: User) => user.Id === id);
            }
        }
    },
    actions: {
    },
    modules: {
    }
})
