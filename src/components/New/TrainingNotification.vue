<template>
<!-- 训练通知 -->
    <div class="courseNotice">
        <el-row>
            <el-col :offset="1" :span="22">
                <el-table :data="dataTable4" border stripe>
                    <el-table-column prop="id"></el-table-column>
                    <el-table-column prop="name" label="姓名"></el-table-column>
                    <el-table-column prop="title" label="标题"></el-table-column>
                    <el-table-column prop="newContent" label="消息内容"></el-table-column>
                    <el-table-column prop="sendTime" label="发送时间"></el-table-column>
                    <el-table-column prop="sendState" label="发送状态"></el-table-column>
                </el-table>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    data(){
        return{
            dataTable4:[
                {
                    id:1,
                    name:"李小希",
                    title:"亲爱的小希爸爸，您的宝贝李小希已完成本次训练",
                    newContent:"远视性弱视训练",
                    sendTime:"2018-11-21",
                    sendState:"成功"
                },
                {
                    id:2,
                    name:"李小希",
                    title:"亲爱的小希爸爸，您的宝贝李小希已完成本次训练",
                    newContent:"远视性弱视训练",
                    sendTime:"2018-11-21",
                    sendState:"成功"
                },
                {
                    id:3,
                    name:"李小希",
                    title:"亲爱的小希爸爸，您的宝贝李小希已完成本次训练",
                    newContent:"远视性弱视训练",
                    sendTime:"2018-11-21",
                    sendState:"成功"
                },
                {
                    id:4,
                    name:"李小希",
                    title:"亲爱的小希爸爸，您的宝贝李小希已完成本次训练",
                    newContent:"远视性弱视训练",
                    sendTime:"2018-11-21",
                    sendState:"成功"
                },
            
            ],

        }
    }
}
</script>
<style>

</style>
