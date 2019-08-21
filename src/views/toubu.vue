<template id='toubu'>
  <div >
   <el-container>
      <el-header style="height: 547px">
         <div class="header-count">
           <p style="width:100%;display: flex; justify-content: space-between">
             <img src="http://www.haue.edu.cn/img/logo7.png" alt=""  style=" display: flex">
             <span style="display: flex"><input type="text" style="width:250px;height:40px;margin-top:25px"><input type="button" value="确定" style="width:60px;height:44px;margin-top:25px"></span>
           </p>
           <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"  text-color="white" active-text-color="#ffd04b"  background-color='rgb(48, 48, 150)' style="border:none">
            <el-menu-item index="1" ><router-link :to="{ name: 'home'}" style=" text-decoration: none;color:white">首页</router-link></el-menu-item>
                <el-submenu index="2">
                 <template slot="title">学校概况</template>
                    <el-menu-item index="jianjei" background-color="blue"><router-link :to="{ name: 'jianjie'}" style=" text-decoration: none;color:white">学校简介</router-link></el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                </el-submenu>
                 <el-submenu index="3">
                 <template slot="title">学校概况</template>
                    <el-menu-item index="3-1">选项1</el-menu-item>
                    <el-menu-item index="3-2">选项2</el-menu-item>
                    <el-menu-item index="3-3">选项3</el-menu-item>
                </el-submenu>
                   <el-menu-item index="4">新闻网</el-menu-item>
                   <el-menu-item index="5">人才培养</el-menu-item>
                 <el-submenu index="6">
                 <template slot="title">科学研究</template>
                    <el-menu-item index="6-1">选项1</el-menu-item>
                    <el-menu-item index="6-2">选项2</el-menu-item>
                </el-submenu>
                  <el-menu-item index="7">人才引进</el-menu-item>
                   <el-submenu index="8">
                 <template slot="title">招生就业</template>
                    <el-menu-item index="8-1">选项1</el-menu-item>
                    <el-menu-item index="8-2">选项2</el-menu-item>
                </el-submenu>
                   <el-submenu index="9">
                 <template slot="title">学生工作</template>
                    <el-menu-item index="9-1">选项1</el-menu-item>
                    <el-menu-item index="9-2">选项2</el-menu-item>
                </el-submenu>
                   <el-menu-item index="10">图书资料</el-menu-item>
                   <el-submenu index="11">
                 <template slot="title" >合作办学</template>
                    <el-menu-item index="11-1">选项1</el-menu-item>
                    <el-menu-item index="11-2">选项2</el-menu-item>
                </el-submenu>
   </el-menu>
             
         </div>
      </el-header>
      </el-container>
        </div>
</template>
  <script>

 export default{
    methods: {
     
      },
    data(){
      return{

        
      }
    }
 }
    
</script>
<style>
  *{
    margin: 0px ;
    padding: 0px ;
  }
  .el-header{
    width:100%;
    height:155px  !important;
    background:rgb(48, 48, 148)
  }
      .header-count{
        width:1150px;
        height: 540px;
        margin:0px auto;
      }
   

   
         
                 
             
            

</style>