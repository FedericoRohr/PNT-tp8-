import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        ruta:"https://6351ddd1dfe45bbd55ca4dfa.mockapi.io/usuariosPost",
        usuarios:[]
    },
    actions: {
        postUsuarios({commit},usuario){
            commit('postUsuarios',usuario)
        },
        clear({commit}){
            commit('clear')
        },
        getPostsAxios({commit}){
            commit('getPostsAxios')
        },
        getPostsFetch({commit}){
            commit('getPostsFetch')
        }
    },
    mutations: {
    async postUsuarios(state,usuario){
        try {
            await axios.post(state.ruta, usuario)
            }
            catch(error) { console.error(error) } 
        },
           clear(state){
            state.usuarios = []     
        },
       async getPostsAxios(state){
        try {
            let get = await axios(state.ruta)
            state.usuarios = get.data
            }
            catch(error) { console.error(error) } 
        },
        async getPostsFetch(state){
        try {
            let response = await fetch(state.ruta)
            let respuesta = await response.json()
            state.usuarios = respuesta
            }
            catch(error) {
            console.error(error)
            }
         },        
    }
})