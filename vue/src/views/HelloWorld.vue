<template>
  <div >
      <ul v-for="(item,index) in list" :key="index">
         <li> {{item.name}}</li>
        <li> {{item.id}}</li>
        <li> {{item.tel}}</li>
      </ul>
  </div>
</template>

<script>
  import {findapi} from '../api/curd'
export default {

  data () {
    return {
        list:[
          {name:'shuai啊哈哈哈'}
        ]

    }
  },
  methods:{
        test1(){
           findapi().then((response) =>{
                this.list=response.docs;
                console.log("11111111shuai",response.docs);
              })
              .catch(function (error) {
                console.log(error);
              });
        }

  },
  mounted(){
    this.test1()
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
