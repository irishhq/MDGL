<template>
<!-- 课程通知 -->
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
                    name:"何柯卿",
                    title:"亲爱的会员，我们以为您的宝贝创建1期训练课来恢复孩子的视力",
                    newContent:"万里江山眼底收，大千世界目中明",
                    sendTime:"2018-10-16",
                    sendState:"成功"
                },
                {
                    id:2,
                    name:"何柯卿",
                    title:"亲爱的会员，我们以为您的宝贝创建1期训练课来恢复孩子的视力",
                    newContent:"万里江山眼底收，大千世界目中明",
                    sendTime:"2018-10-16",
                    sendState:"成功"
                },
                {
                    id:3,
                    name:"何柯卿",
                    title:"亲爱的会员，我们以为您的宝贝创建1期训练课来恢复孩子的视力",
                    newContent:"万里江山眼底收，大千世界目中明",
                    sendTime:"2018-10-16",
                    sendState:"成功"
                },
                {
                    id:4,
                    name:"何柯卿",
                    title:"亲爱的会员，我们以为您的宝贝创建1期训练课来恢复孩子的视力",
                    newContent:"万里江山眼底收，大千世界目中明",
                    sendTime:"2018-10-16",
                    sendState:"成功"
                },
            
            ],

        }
    }
}
</script>
<style>

</style>
