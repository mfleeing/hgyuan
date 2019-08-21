<template>
   <div>
       <div style="width:1100px; margin:40px auto">
             开始行:<input type="text"  v-model="page" style="width:300px;height:40px;margin-right:60px"> 
             需要返回数量行:<input type="text" v-model="size" style="width:300px;height:40px;margin-right:100px"> 
             <button @click="list" style="width:100px;height:44px">确定</button>
         
     </div>
     
     </div>
</template>
<script>
import getlist from '../httpService'
import Axios from 'axios';
export default {
data() {
    return {
    page:"",
    size:'',
    keywords:'',
    };
  },
  methods:{
      list(){
      Axios.get('api/sfz.php',{
          params:{
          page:this.page,
          size:this.size,
          }  
      }).then(res => {
         this.$store.commit('changeData',res.data.data)
          console.log(res.data)
      })
      .catch(err => {
          console.log(err); 
    })
      },

  }
}

</script>
<style>
 
</style>
