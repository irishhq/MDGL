<template>
<!-- 系统公告 -->
    <div class="courseNotice">
        <el-row>
            <el-col :offset="1" :span="22">
                <el-table :data="dataTable4" border stripe>
                    <el-table-column prop="newsName" label="消息名称"></el-table-column>
                    <el-table-column prop="newContent" label="消息内容"></el-table-column>
                    <el-table-column prop="startTime" label="开始时间"></el-table-column>
                    <el-table-column prop="endTime" label="结束时间"></el-table-column>
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
                    newsName:"护眼小常识",
                    newContent:"眼睛长时间暴露在阳光下，会增加患白内障的几率",
                    startTime:"2018-08-25",
                    endTime:"2019-03-26"
                },
                {
                    newsName:"护眼小常识",
                    newContent:"眼睛长时间暴露在阳光下，会增加患白内障的几率",
                    startTime:"2018-08-25",
                    endTime:"2019-03-26"
                },
                {
                    newsName:"护眼小常识",
                    newContent:"眼睛长时间暴露在阳光下，会增加患白内障的几率",
                    startTime:"2018-08-25",
                    endTime:"2019-03-26"
                },
                {
                   newsName:"护眼小常识",
                    newContent:"眼睛长时间暴露在阳光下，会增加患白内障的几率",
                    startTime:"2018-08-25",
                    endTime:"2019-03-26"
                },
            
            ],

        }
    }
}
</script>
<style>

</style>
