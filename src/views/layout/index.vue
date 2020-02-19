<template>
    <el-container class="main-container">
        <!--头-->
        <el-header>

            <el-dropdown>
                <i class="el-icon-setting"></i>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>查看</el-dropdown-item>
                    <el-dropdown-item>新增</el-dropdown-item>
                    <el-dropdown-item>删除</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <span>王小虎</span>
        </el-header>
        <!--中间-->
        <el-container class="middle">
            <!--菜单-->
            <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse">
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span slot="title">导航一</span>
                    </template>
                    <el-menu-item-group>
                        <span slot="title">分组一</span>
                        <el-menu-item index="1-1">选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                        <el-menu-item index="1-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-4">
                        <span slot="title">选项4</span>
                        <el-menu-item index="1-4-1">选项1</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-submenu index="40">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span slot="title">导航一</span>
                    </template>
                    <el-menu-item-group>
                        <span slot="title">分组一</span>
                        <el-menu-item index="1-1">选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                        <el-menu-item index="1-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-4">
                        <span slot="title">选项4</span>
                        <el-menu-item index="1-4-1">选项1</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-submenu index="8">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span slot="title">导航一</span>
                    </template>
                    <el-menu-item-group>
                        <span slot="title">分组一</span>
                        <el-menu-item index="1-1">选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                        <el-menu-item index="1-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-4">
                        <span slot="title">选项4</span>
                        <el-menu-item index="1-4-1">选项1</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <span slot="title">导航四</span>
                </el-menu-item>
            </el-menu>
            <!--菜单开关-->
            <div class="menu-switch" :style="{width:[isCollapse?'64px':'200px']}">
                <i @click="triggerSwitch"
                   :class="[isCollapse?'el-icon-d-arrow-right':'el-icon-d-arrow-left']"/>
            </div>

            <el-container>
                <el-main style="padding: 10px">
                    <el-table :data="tableData">
                        <el-table-column prop="date" label="日期" width="140">
                        </el-table-column>
                        <el-table-column prop="name" label="姓名" width="120">
                        </el-table-column>
                        <el-table-column prop="address" label="地址">
                        </el-table-column>
                    </el-table>
                </el-main>
                <el-footer style="height:40px">©️2020
                    <el-link icon="el-icon-link" href="https://github.com/zhaoyunxing92">zhaoyunxing</el-link>
                </el-footer>
            </el-container>
        </el-container>

    </el-container>
</template>
<style lang="scss" scoped>
    .main-container {
        height: 100%;
        /*头*/
        .el-header {
            background-color: #409EFF;
            color: #333;
            line-height: 50px;
            height: 50px;
            text-align: right;
            position: absolute;
            /*z-index: 5;*/
            top: 0;
            width: 100%;

            .el-icon-setting {
                margin-right: 15px
            }
        }

        .middle {
            width: 100%;
            overflow: hidden;
            top: 60px;
            position: absolute;
            /*z-index: 5;*/
            bottom: 0;
            box-sizing: border-box;

            .el-menu:not(.el-menu--collapse) {
                width: 200px;
                min-height: 400px;
                overflow: auto;

                &::-webkit-scrollbar { /*滚动条整体样式*/
                    width: 3px;
                    height: 3px;
                }

                &::-webkit-scrollbar-thumb {
                    border-radius: 5px;
                    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
                    background: rgba(0, 0, 0, 0.2);
                }

                &::-webkit-scrollbar-track { /*滚动条里面轨道*/
                    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
                    border-radius: 0;
                    background: rgba(0, 0, 0, 0.1);
                }
            }

            /*中间内容*/
            .el-main {
                margin: 6px;
                /*滚动条样式*/
                &::-webkit-scrollbar { /*滚动条整体样式*/
                    width: 3px;
                    height: 3px;
                }

                &::-webkit-scrollbar-thumb {
                    border-radius: 5px;
                    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
                    background: rgba(0, 0, 0, 0.2);
                }

                &::-webkit-scrollbar-track { /*滚动条里面轨道*/
                    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
                    border-radius: 0;
                    background: rgba(0, 0, 0, 0.1);
                }
            }

            /*菜单折叠开关*/
            .menu-switch {
                height: 40px;
                line-height: 40px;
                background-color: #ebeef5;
                text-align: center;
                position: absolute;
                bottom: 0;

                i {
                    cursor: pointer;
                    width: 40px;
                    height: 40px;
                    line-height: 40px;
                    transition: all .5s;

                    &:hover {
                        color: #409EFF;
                        font-size: 18px;
                    }
                }
            }

            .el-footer {
                line-height: 40px;
                background-color: #ffffff;
                border-top: #EBEEF5 1px solid;
                text-align: center;
            }
        }
    }


</style>

<script>
    export default {
        data() {
            const item = {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            };
            return {
                tableData: Array(20).fill(item),
                isCollapse: false
            };
        },
        methods: {
            triggerSwitch() {
                this.isCollapse = !this.isCollapse;
            }
        }
    };
</script>