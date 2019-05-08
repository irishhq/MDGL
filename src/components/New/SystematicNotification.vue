<template>
<!-- 系统通知 -->
    <div class="courseNotice">
        <el-row>
            <el-col :offset="1" :span="22">
                <el-table :data="dataTable4" border stripe>
                    <el-table-column prop="id"></el-table-column>
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
                    title:"护眼小常识",
                    newContent:"提醒您注意膳食均衡，做到粗细搭配，荤素搭配",
                    sendTime:"2018-08-25",
                    sendState:"成功"
                },
                {
                    id:2,
                    title:"护眼小常识",
                    newContent:"提醒您注意膳食均衡，做到粗细搭配，荤素搭配",
                    sendTime:"2018-08-25",
                    sendState:"成功"
                },
                {
                    id:3,
                    title:"护眼小常识",
                    newContent:"提醒您注意膳食均衡，做到粗细搭配，荤素搭配",
                    sendTime:"2018-08-25",
                    sendState:"失败"
                },
                {
                    id:4,
                    title:"护眼小常识",
                    newContent:"提醒您注意膳食均衡，做到粗细搭配，荤素搭配",
                    sendTime:"2018-08-25",
                    sendState:"成功"
                },
            
            ],

        }
    }
}
</script>
<style>

</style>
