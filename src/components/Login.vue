<template>
    <div>
        <img alt="Vue logo"  src="../assets/logo.png">
        <el-form status-icon :model="user" :rules="rules" label-position="right" class="login-container" v-loading="loading">
            <h3>系统登录</h3>
            <el-form-item label="帐号：" prop="username">
                <el-input type="text" placeholder="请输入帐号" v-model="user.username"></el-input>
            </el-form-item>
            <el-form-item label="密码：" prop="password">
                <el-input type="text"  placeholder="请输入密码" v-model="user.password"></el-input>
            </el-form-item>
            <el-button type="primary" @click="summitClick">登录</el-button>
        </el-form>
    </div>
</template>

<script>
    import Axios from 'axios'

    export default {
        name: "Login",
        data:function () {
            return {
                loading:false,
                user:{
                  username:'',
                  password:''
                },
                rules:{
                    username:[
                        {required:true ,message:'用户名不能为空',trigger:'blur'}
                    ],
                    password:[
                        {required:true ,message:'密码不能为空',trigger:'blur'},
                    ]

                }
            }
        },
        methods:{
            summitClick:function () {
                this.loading=true;
                Axios.post('http://localhost/login',{username:this.user.username,password:this.user.password}).then(
                    res=>{
                        this.loading=false;
                        this.$router.replace({path:'/home'});
                        return res;
                    }
                ).catch(
                    res=>{
                        window.console.log(res);
                        alert("帐号密码错误");
                        this.loading=false;
                    }
                );
            }
        }
    }
</script>

<style scoped>
    .login-container {
        border-radius: 15px;
        background-clip: padding-box;
        margin: 50px auto;
        width: 350px;
        padding: 35px 35px 15px 35px;
        background: #fff;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;
    }
</style>