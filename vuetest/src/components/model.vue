<template>

  <div >1111111111111
    <button  @click="shuai()">cancel</button></div>

</template>

<script>
 // import { requestLogin } from '../api/api';
  //import NProgress from 'nprogress'
  export default {
    data() {
      return {}},
    props:[
      'test'
    ],
    methods:{
      shuai(){
        alert('11111111');
        this.$emit('ee', 'cc12345')
      }
    }
  }

</script>

<style  scoped>

</style>
