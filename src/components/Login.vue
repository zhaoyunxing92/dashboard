<template>
    <div class="login-container">
        <div class="login-box">
            <div class="avatar-box">
                <img src="../assets/logo.png" alt="logo">
            </div>
            <!--登录表单-->
            <el-form ref="loginFormRef" :rules="loginRules" :model="loginForm" label-width="0" class="login-form">
                <!--账号-->
                <el-form-item prop="username">
                    <el-input prefix-icon="el-icon-user" v-model="loginForm.username" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <!--密码-->
                <el-form-item prop="password">
                    <el-input prefix-icon="el-icon-lock" type="password" v-model="loginForm.password"
                              placeholder="请输入密码"></el-input>
                </el-form-item>
                <!--按钮-->
                <el-form-item class="btns">
                    <el-button type="primary" @click="login">登录</el-button>
                    <el-button type="info" @click="resetForm">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                loginForm: {
                    username: '',
                    password: ''
                },
                loginRules: {
                    username: [
                        {required: true, message: '请输入用户名', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            /*登录*/
            login() {
                this.$refs.loginFormRef.validate(valid => {
                    if (!valid) return;
                    // 登录逻辑
                    console.log(this.loginForm)
                })
            },
            /*重置*/
            resetForm() {
                this.$refs.loginFormRef.resetFields()
            }
        }
    }
</script>

<style lang="less" scoped>
    .login-container {
        height: 100%;
        width: 100%;
        background-color: #eee;

        .login-box {
            width: 450px;
            height: 300px;
            background-color: #fff;
            border-radius: 2%;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);

            .avatar-box {
                height: 100px;
                width: 100px;
                border: 1px solid #dadada;
                border-radius: 50%;
                padding: 10px;
                box-shadow: 0 0 10px #ddd;
                position: absolute;
                left: 50%;
                transform: translate(-50%, -50%);
                background-color: #fff;

                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    background-color: #e8e8e8;
                    border: 1px solid #dadada;
                }
            }

            /*按钮*/

            .login-form {
                position: absolute;
                bottom: 0;
                width: 100%;
                padding: 20px;
                box-sizing: border-box;

                .btns {
                    display: flex;
                    justify-content: flex-end;
                }
            }
        }
    }
</style>
