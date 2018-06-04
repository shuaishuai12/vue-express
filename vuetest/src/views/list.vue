<template>
    <div>
      <input type="text" :value="arr1">

      <input type="button" value="点击"  @click="handleShow()">
      <input type="button" value="清空"  @click="handleShow1()">
    <ul v-if="ListVisible" >
      <li v-for="(item,index) in list"  :key="index" @click="dianji(item)" >{{item.name}}</li>


    </ul>
    </div>

</template>

<script>

  //import NProgress from 'nprogress'
  export default {
    data() {
      return {
        ListVisible:false,
        list:[
          {name:1},
          {name:2},
          {name:3},
          {name:4},
          {name:5},
          {name:6}
        ],
        arr:[]
      }

    },
    filters: {
      sort1:function (value) {
        return value.sort()
      }
    },
    methods: {
      handleShow1(){
        this.arr=[]
      },
        handleShow(){
          this.ListVisible=!this.ListVisible
        },
        dianji(it){

          console.log(it.name);


          /*if(this.arr.indexOf(it.name) > -1){*/
          if(this.arr.includes(it.name)){
            this.arr.splice(this.arr.findIndex(item =>{
              return item ==it.name
              }),1)

          }else {this.arr.push(it.name)}


       /*   let arr1=[];
          arr1.push(it.name)
          console.log('11111',arr);*/

          // shuai.push(it.name);
         // console.log('arr',arr)

        }







    },
    watch:{
      arr:function () {
        console.log('变化了')

      }
    },
    computed:{
      arr1:function () {
        return this.arr.sort()
      }
    }
    }


</script>

<style lang="scss" scoped>
    li { list-style: none}
    ul li { background-color: greenyellow ; margin-top: 20px; border: 1px solid salmon}
</style>
