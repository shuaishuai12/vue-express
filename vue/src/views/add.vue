<template>
  <div >
    name:
    <input type="text" v-model="name" ><br>
    tel:
    <input type="text" v-model="tel"><br>
    <buttom @click="add()">提交</buttom>
  </div>
</template>

<script>
  import {addapi} from '../api/curd'
export default {

  data () {
    return {
        name:'',
        tel:''
    }
  },
  methods:{
        add(){
          let para ={
            name:this.name,
            tel:this.tel
          }
          addapi(para).then((response) =>{
              //  this.list=response.docs;
                console.log("11111111shuai",response.docs);
              })
              .catch(function (error) {
                console.log(error);
              });
        }

  },
  mounted(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
