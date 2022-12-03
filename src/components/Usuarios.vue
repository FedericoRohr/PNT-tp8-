<template>

  <section class="src-components-usuarios">
   <div class="jumbotron">
    <h1>Metodo POST</h1>
      <button class="btn btn-success my-3 mr-3" @click="getPostsFetch()">Fetch</button>
      <button class="btn btn-success my-3 mr-3" @click="getPostsAxios()">Axios</button>
      <button class="btn btn-warning my-3 mr-3" @click="clear()">borrar</button>


      <!----------------------TABLA--------------------------------------------------------------->
      <div>
      <table class="table table-dark">
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Edad</th>
          </tr>
          <tr v-for="usuario in getUsuarios" :key="usuario.email ">
            <td>{{usuario.nombre }}</td>
            <td>{{ usuario.mail }}</td>
            <td>{{ usuario.edad }}</td>
          </tr>
        </table>
      </div>
   </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-components-usuarios',
    props: [],
    mounted () {
    
    },
    data () {
      return {  
      }
    },
    methods: {
      async getPostsAxios() {
       await this.$store.dispatch('getPostsAxios')
      },
      clear(){
        this.$store.dispatch('clear')
       
      },
      async getPostsFetch() {
       this.$store.dispatch('getPostsFetch')
      }

        },
    computed: {
      getUsuarios(){
        return this.$store.state.usuarios
      }

    }
}


</script>

<style scoped lang="css">
.jumbotron{
  background-color: red;
  color: black;
}
</style>
