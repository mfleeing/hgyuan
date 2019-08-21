<template>
  <div class="home">
   <el-container>
     <toubu></toubu>
     <div style="width:100%;background: linear-gradient(rgb(48, 48, 148), skyblue);">
        <el-carousel :interval="5000" arrow="always" height="380px" style="width:1150px;margin:0px auto;"> 
                      <el-carousel-item v-for="item in items" :key="item">
                        <img :src="item" alt="">
                        </el-carousel-item>
                      </el-carousel>
     </div>
      
      <el-main>
        <div class="main-count">
          <div style="width:55%;height:300px;">
           <ul class="nav">
             <li  @mouseover="a"    :style="ys" >学校新闻</li>
             <li  @mouseover="a2"     :style="ys2">部门动态</li>
             <li  @mouseover="a3" :style="ys3">通知公告</li>
             <li  @mouseover="a4"  :style="ys4">视频新闻</li>
             <li  @mouseover="a5"   :style="ys5">学校风光</li>
             <li>MORE=></li>
           </ul>
           <ul class="nav-count" v-if="flag">
           <li v-for="content in contents" :key='content' style="font-size:13px;display: flex;justify-content: space-between;list-style:disc ;"><span style=" display: flex;margin:5px 20px; ">{{content.nr}}</span ><span style=" display: flex;margin:5px 0px">{{content.time}}</span></li>
           </ul>
             <ul class="nav-count" v-else-if="flag2">
           <li v-for="content in contents" :key='content' style="font-size:13px;color:green;display: flex;justify-content: space-between;list-style:disc ;"><span style=" display: flex;margin:5px 20px; ">{{content.nr}}</span ><span style=" display: flex;margin:5px 0px">{{content.time}}</span></li>
           </ul>
              <ul class="nav-count" v-else-if="flag3">
           <li v-for="content in contents" :key='content' style="font-size:13px;display: flex;justify-content: space-between;list-style:disc ;"><span style=" display: flex;margin:5px 20px; ">{{content.nr}}</span ><span style=" display: flex;margin:5px 0px">{{content.time}}</span></li>
           </ul>
              <ul class="nav-count" v-else-if="flag4">
           <li v-for="content in contents" :key='content' style="font-size:13px;color:green;display: flex;justify-content: space-between;list-style:disc ;"><span style=" display: flex;margin:5px 20px; ">{{content.nr}}</span ><span style=" display: flex;margin:5px 0px">{{content.time}}</span></li>
           </ul>
             <ul class="nav-count" v-else-if="flag5">
              <li v-for="picture in pictures" :key='picture' style="list-style:none;display:inline-block "><img :src="picture" alt=""  style="width:100px;height:70px;margin:5px 8px;" ></li>
             </ul>
          
          </div>
          <div style="width:40%;height:300px;;  "> 
              <ul class="aside-nav">
                <li  @mouseover="b"      :style="asd">专题栏目</li>
                <li  @mouseover="b2"     :style="asd2" >专题栏目</li>
                <li  @mouseover="b3"     :style="asd3" >专题栏目</li>
              </ul>
             <ul style="width:90%;height:250px;margin:0px auto" v-if="flag6">
              <li v-for="image in images" :key='image' style="list-style:none;  "><img :src="image" alt=""  style="width:80%;height:70px;margin:5px 0px" ></li>
             </ul>
             <ul style="width:90%;height:250px;margin:0px auto" v-if="flag7">
             <li v-for="content in contents" :key='content' style="font-size:13px;display: flex;justify-content: space-between;list-style:disc ;"><span style=" display: flex;margin:5px 20px; ">{{content.nr}}</span ><span style=" display: flex;margin:5px 0px">{{content.time}}</span></li>
             </ul>
             <ul style="width:90%;height:250px;margin:0px auto" v-if="flag8">
          <li v-for="content in contents" :key='content' style="font-size:13px;color:green;display: flex;justify-content: space-between;list-style:disc ;"><span style=" display: flex;margin:5px 20px; ">{{content.nr}}</span ><span style=" display: flex;margin:5px 0px">{{content.time}}</span></li>
             </ul>
           </div>
        </div>

      </el-main>
      <el-footer style="height: 200px;">
          <div style="width:1100px;height:140px;margin:30px auto;display: flex;flex-wrap:wrap;justify-content: center;align-items: center">
           <img src="http://www.haue.edu.cn/index2015/img/ewm.png"  style=" display: flex;margin-top:50px;height:100px">
           <div style="width:80%;height:80px;margin:0px auto;display: flex; justify-content: space-around; align-items: flex-start;">
               <div style="width:310px;height:65px;border-left:1px white solid;line-height:30px;font-size:14px;text-align:left;padding-left:30px">
               <p style="width:100%; display: block">通讯地址:河南省郑州市新郑龙湖祥和路1号</p>
               <p>邮编:451191 <span style="margin-left:18px">招生电话: 0371-62508666</span>  </p>
               </div>
              <div style="width:360px;height:65px;border-left:1px white solid;line-height:30px;font-size:14px;margin-left:-60px;padding-left:30px;text-align:left">
               <p style="width:100%; display: block">Address: No. 1, Xianghe Road, Xinzheng, P. R. China</p>
               <p>451191  <span style="margin-left:20px">TEL: +86-0371-62508666</span> </p>
               </div>
           </div>


           <p style="display: flex;padding-left:100px;margin-top:-60px;font-size:16px;color:#99BCA8">河南工程学院版权所有 Copyright©2007-2015 Henan University of Engineering , - 网站地图 -  <a href="" style="text-decoration: none;color:#99BCA8">豫ICP备 14017577号-2</a> </p>
           
           
          </div>
      </el-footer>
  </el-container>
 
  </div>
</template>

<script>

 export default{
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      a(){
        this.flag3=false;
        this.flag4=false;
        this.flag5=false;
        this.flag2=false;
        this.flag=true;
        this.ys={
         'border':'1px blue solid'
        }
          this.ys5={
         'border':'none'
        }
           this.ys2={
         'border':'none'
        }
            this.ys3={
         'border':'none'
        }
               this.ys4={
         'border':'none'
        }
      },
      a2(){
        this.flag=false;
        this.flag3=false;
        this.flag4=false;
        this.flag5=false;
        this.flag2=true;
           this.ys2={
         'border':'1px blue solid'
        }
          this.ys5={
         'border':'none'
        }
           this.ys3={
         'border':'none'
        }
            this.ys={
         'border':'none'
        }
               this.ys4={
         'border':'none'
        }
      },
        a3(){
        this.flag=false;
        this.flag2=false;
        this.flag4=false;
        this.flag5=false;
        this.flag3=true;
           this.ys3={
         'border':'1px blue solid'
        }
          this.ys5={
         'border':'none'
        }
           this.ys2={
         'border':'none'
        }
            this.ys={
         'border':'none'
        }
               this.ys4={
         'border':'none'
        }
      },
        a4(){
        this.flag=false;
        this.flag2=false;
        this.flag3=false;
        this.flag4=true;
         this.flag5=false;
          this.ys4={
         'border':'1px blue solid'
        }
          this.ys5={
         'border':'none'
        }
           this.ys2={
         'border':'none'
        }
            this.ys3={
         'border':'none'
        }
               this.ys={
         'border':'none'
        }

      },
        a5(){
        this.flag=false;
        this.flag2=false;
        this.flag3=false;
        this.flag4=false;
        this.flag5=true;
         this.ys5={
     'border':'1px blue solid'
        }
               this.ys={
         'border':'none'
        }
           this.ys2={
         'border':'none'
        }
            this.ys3={
         'border':'none'
        }
               this.ys4={
         'border':'none'
        }
      },
      b(){
        this.flag6=true;
        this.flag7=false;
        this.flag8=false;
                   this.asd={
         'border':'1px blue solid'
        }
            this.asd2={
         'border':'none'
        }
               this.asd3={
         'border':'none'
        }
      },
         b3(){
        this.flag8=true;
        this.flag7=false;
        this.flag6=false;
                   this.asd3={
         'border':'1px blue solid'
        }
            this.asd2={
         'border':'none'
        }
               this.asd={
         'border':'none'
        }
      },
         b2(){
        this.flag7=true;
        this.flag6=false;
        this.flag8=false;
                   this.asd2={
         'border':'1px blue solid'
        }
            this.asd={
         'border':'none'
        }
               this.asd3={
         'border':'none'
        }
      },
      
      
    },
    data(){
      return{
            activeIndex: '1',
            activeIndex2: '1',
            flag:true,
            flag2:false,
            flag3:false,
            flag4:false,
            flag5:false,
            flag6:true,
            flag7:false,
            flag8:false,
          items:[
         "http://www.haue.edu.cn/upfile/20180613/201806260011.jpg",
         "http://www.haue.edu.cn/upfile/201512/2201512152215.jpg",
         "http://www.haue.edu.cn/upfile/201512/7201512152220.jpg",
        ],
        contents:[
          {
            nr:'我校辅导员首次荣获“河南省高校辅导员年度人物提名奖” ',
            time:'2019/08/17',
          },
           {
            nr:'我校辅导员首次荣获“河南省高校辅导员年度人物提名奖” ',
            time:'2019/08/17',
          },
           {
            nr:'我校辅导员首次荣获“河南省高校辅导员年度人物提名奖” ',
            time:'2019/08/17',
          },
           {
            nr:'我校辅导员首次荣获“河南省高校辅导员年度人物提名奖” ',
            time:'2019/08/17',
          }, 
          {
            nr:'我校辅导员首次荣获“河南省高校辅导员年度人物提名奖” ',
            time:'2019/08/17',
          }
        ],
        images:[
              'http://www.haue.edu.cn/img/20190313/xuexitzk.jpg',
              'http://www.haue.edu.cn/img/20190313/xuexitzk.jpg',
              'http://www.haue.edu.cn/img/20190313/xuexitzk.jpg',
        ] ,
        pictures:[
          'http://www.haue.edu.cn/upfile/201512/7201512152220.jpg',
          'http://www.haue.edu.cn/upfile/201512/2201512152215.jpg',
          "http://www.haue.edu.cn/upfile/20180613/201806260011.jpg",
          'http://www.haue.edu.cn/upfile/201512/2201512152215.jpg',
          'http://www.haue.edu.cn/upfile/201512/7201512152220.jpg',
          'http://www.haue.edu.cn/upfile/201512/2201512152215.jpg',
          "http://www.haue.edu.cn/upfile/20180613/201806260011.jpg",
          "http://www.haue.edu.cn/upfile/20180613/201806260011.jpg",
          'http://www.haue.edu.cn/upfile/201512/7201512152220.jpg',
          'http://www.haue.edu.cn/upfile/201512/2201512152215.jpg',
          'http://www.haue.edu.cn/upfile/201512/7201512152220.jpg',
          'http://www.haue.edu.cn/upfile/201512/2201512152215.jpg',
           "http://www.haue.edu.cn/upfile/20180613/201806260011.jpg",
          'http://www.haue.edu.cn/upfile/201512/7201512152220.jpg',
          "http://www.haue.edu.cn/upfile/20180613/201806260011.jpg",
        ]
    
      }
    }
  }
</script>
<style>
  *{
    margin: 0px ;
    padding: 0px ;
  }

           .el-carousel__item img {
              width:1150px;
              height:380px;
     }
  .el-footer {
    width: 100%;
    background-color: #193B83;
    color: white;
    text-align: center;
   
  }

  .el-main {
    padding: 0px !important;
    width: 100%;
    color: #333;
    text-align: center;
    background: rgb(211, 211, 211);

  }
      .main-count{
        width:1150px;
        margin: 0px auto;
        display: flex;
       justify-content: space-between;
       background: white;
      }
          
            .nav-count{
              width:100%;
              height:250px;
              margin:0px auto;

            } 
               .nav{
                  margin: 10px auto;;
                  border-bottom:2px blue solid;
                  width:100%;
                  height: 25px;
                  display: flex;
                  justify-content: space-between;
                    }
                  .nav li{
                     display: flex;
                     list-style: none;
                     text-align: center;
                     font-size: 13px;
                     width:65px;
                     height:25px;
                     line-height: 25px;
                     margin: -2px 0px;
                     padding: 0px 0px 0px 5px;
                     cursor: pointer;
                    }
            .aside-nav{
                  margin: 10px auto;;
                  border-bottom:2px blue solid;
                  width:100%;
                  height: 25px;
                  display: flex;
                  justify-content: flex-start;
             }
           
              .aside-nav li{
                      display: flex;
                     list-style: none;
                     text-align: center;
                     font-size: 13px;
                     width:60px;
                     height:25px;
                     line-height: 25px;
                     margin: -2px 10px;
                     cursor: pointer;
              }
                     
         
                 
             
            

</style>