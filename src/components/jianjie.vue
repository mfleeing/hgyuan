<template>
  <div>
    <toubu></toubu>
    <getlist></getlist>
    <el-table
      :data="tableData"
      style="width: 80%;margin:0px auto;" border >
      <el-table-column
        prop="xuhao"
        label="序号"
       
        >
      </el-table-column>
      <el-table-column
        prop="uid"
        label="原本序号"
        >
      </el-table-column>
      <el-table-column
        prop="id"
        label="时间" 
        width="160"
        :default-sort ="{prop:'id',order: 'descending'}"  
       >
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名">
      </el-table-column>
       <el-table-column
        prop="sex"
        label="男"
        >
      </el-table-column>
      <el-table-column
        prop="carID"
        label="身份证号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="birthday"
        label="出生日期" 
        width="140">
      </el-table-column>
      <el-table-column
        prop="nation"
        label="民族">
      </el-table-column>
        <el-table-column
        prop="address"
        label="地址"
        width="360" >
      </el-table-column>
    </el-table>


 </div>
</template>
<script>
    
 import getlist from './getlist.vue' 
     
     export default {
         methods: {
  
    },
       components: {getlist},
    //     methods: {
    //   indexMethod(index) {
    //     return index+1;
    //   }
    // },
      data() {
        return {
        
        }
      },
      mounted(){

      },
      computed:{
   
       tableData:function () {
        let temp =this.$store.state.tableData  
        let array=[];
        temp.forEach(function(item,index){
         let nameS= item.name.split("=");   
           if (nameS.length==6) {
           let obj={};
            obj.xuhao=index+1;
            obj.uid=item.uid;
            obj.id=item.id;
            obj.name=nameS[0];
            obj.sex=nameS[1];
            obj.carID=nameS[2].slice(0,6)+'******'+nameS[2].slice(12,18)
            obj.birthday=nameS[3]
            obj.nation=nameS[4]
            obj.address=nameS[5]
            array.push(obj);
            // console.log(obj);
           }
       });
      // array.forEach((obj,index) => {
      //  obj.xuhao = index+1
      // });
     return array;
          },
    
      },

  }
</script>
<style >

</style>