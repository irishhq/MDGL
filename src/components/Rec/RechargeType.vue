<template>
<!-- 充值类型 -->
    <div class="rechargeType">
        <el-row>
            <el-col :offset="1" :span="22">
                <el-table :data="dataTable" border stripe>
                    <el-table-column prop="id"></el-table-column>
                    <el-table-column prop="type" label="类型"></el-table-column>
                    <el-table-column prop="money" label="金额"></el-table-column>
                    <el-table-column prop="presenterAmount" label="赠送金额"></el-table-column>
                    <el-table-column prop="TurnoverTime" label="更新时间"></el-table-column>
                </el-table>
            </el-col>
        </el-row>

    </div>
</template>
<script>
export default {
    data(){
        return{
            dataTable:[
                {
                    id:1,
                    type:"充三疗程送800元",
                    money:"4840",
                    presenterAmount:"800",
                    TurnoverTime:"2019-01-12",
                },
                {
                    id:2,
                    type:"充三疗程送800元",
                    money:"4840",
                    presenterAmount:"800",
                    TurnoverTime:"2019-01-12",
                },
                {
                    id:3,
                    type:"充三疗程送800元",
                    money:"4840",
                    presenterAmount:"800",
                    TurnoverTime:"2019-01-12",
                },
                {
                    id:4,
                    type:"充三疗程送800元",
                    money:"4840",
                    presenterAmount:"800",
                    TurnoverTime:"2019-01-12",
                },
                {
                    id:5,
                    type:"充三疗程送800元",
                    money:"4840",
                    presenterAmount:"800",
                    TurnoverTime:"2019-01-12",
                },

            ]

        }
    }
}
</script>
<style>

</style>
